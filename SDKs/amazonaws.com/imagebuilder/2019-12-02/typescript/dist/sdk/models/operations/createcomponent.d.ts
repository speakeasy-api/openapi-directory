import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The operating system platform of the component.
 */
export declare enum CreateComponentRequestBodyPlatformEnum {
    Windows = "Windows",
    Linux = "Linux"
}
export declare class CreateComponentRequestBody extends SpeakeasyBase {
    /**
     * The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.
     */
    changeDescription?: string;
    /**
     * The idempotency token of the component.
     */
    clientToken: string;
    /**
     * Component <code>data</code> contains inline YAML document content for the component. Alternatively, you can specify the <code>uri</code> of a YAML document file stored in Amazon S3. However, you cannot specify both properties.
     */
    data?: string;
    /**
     * Describes the contents of the component.
     */
    description?: string;
    /**
     * The ID of the KMS key that is used to encrypt this component.
     */
    kmsKeyId?: string;
    /**
     * The name of the component.
     */
    name: string;
    /**
     * The operating system platform of the component.
     */
    platform: CreateComponentRequestBodyPlatformEnum;
    /**
     * <p>The semantic version of the component. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>
     */
    semanticVersion: string;
    /**
     *  The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation.
     */
    supportedOsVersions?: string[];
    /**
     * The tags that apply to the component.
     */
    tags?: Record<string, string>;
    /**
     * <p>The <code>uri</code> of a YAML component document file. This must be an S3 URL (<code>s3://bucket/key</code>), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota.</p> <p>Alternatively, you can specify the YAML document inline, using the component <code>data</code> property. You cannot specify both properties.</p>
     */
    uri?: string;
}
export declare class CreateComponentRequest extends SpeakeasyBase {
    requestBody: CreateComponentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateComponentResponse extends SpeakeasyBase {
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
     * Success
     */
    createComponentResponse?: shared.CreateComponentResponse;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
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
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
