import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a template location.
 */
export declare class UpdateWorldTemplateRequestBodyTemplateLocation extends SpeakeasyBase {
    s3Bucket?: string;
    s3Key?: string;
}
export declare class UpdateWorldTemplateRequestBody extends SpeakeasyBase {
    /**
     * The name of the template.
     */
    name?: string;
    /**
     * The Amazon Resource Name (arn) of the world template to update.
     */
    template: string;
    /**
     * The world template body.
     */
    templateBody?: string;
    /**
     * Information about a template location.
     */
    templateLocation?: UpdateWorldTemplateRequestBodyTemplateLocation;
}
export declare class UpdateWorldTemplateRequest extends SpeakeasyBase {
    requestBody: UpdateWorldTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateWorldTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateWorldTemplateResponse?: shared.UpdateWorldTemplateResponse;
}
