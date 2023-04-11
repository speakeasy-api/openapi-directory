import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The format of the resource that you want to import as a component.
 */
export declare enum ImportComponentRequestBodyFormatEnum {
    Shell = "SHELL"
}
/**
 * The platform of the component.
 */
export declare enum ImportComponentRequestBodyPlatformEnum {
    Windows = "Windows",
    Linux = "Linux"
}
/**
 * The type of the component denotes whether the component is used to build the image, or only to test it.
 */
export declare enum ImportComponentRequestBodyTypeEnum {
    Build = "BUILD",
    Test = "TEST"
}
export declare class ImportComponentRequestBody extends SpeakeasyBase {
    /**
     * The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.
     */
    changeDescription?: string;
    /**
     * The idempotency token of the component.
     */
    clientToken: string;
    /**
     * The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.
     */
    data?: string;
    /**
     * The description of the component. Describes the contents of the component.
     */
    description?: string;
    /**
     * The format of the resource that you want to import as a component.
     */
    format: ImportComponentRequestBodyFormatEnum;
    /**
     * The ID of the KMS key that should be used to encrypt this component.
     */
    kmsKeyId?: string;
    /**
     *  The name of the component.
     */
    name: string;
    /**
     * The platform of the component.
     */
    platform: ImportComponentRequestBodyPlatformEnum;
    /**
     * <p>The semantic version of the component. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
     */
    semanticVersion: string;
    /**
     * The tags of the component.
     */
    tags?: Record<string, string>;
    /**
     * The type of the component denotes whether the component is used to build the image, or only to test it.
     */
    type: ImportComponentRequestBodyTypeEnum;
    /**
     * The uri of the component. Must be an Amazon S3 URL and the requester must have permission to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.
     */
    uri?: string;
}
export declare class ImportComponentRequest extends SpeakeasyBase {
    requestBody: ImportComponentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ImportComponentResponse extends SpeakeasyBase {
    /**
     * CallRateLimitExceededException
     */
    callRateLimitExceededException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * Success
     */
    importComponentResponse?: shared.ImportComponentResponse;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidVersionNumberException
     */
    invalidVersionNumberException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
