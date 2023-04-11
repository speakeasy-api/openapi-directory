import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorldTemplateBodyRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (arn) of the world generator job.
     */
    generationJob?: string;
    /**
     * The Amazon Resource Name (arn) of the world template.
     */
    template?: string;
}
export declare class GetWorldTemplateBodyRequest extends SpeakeasyBase {
    requestBody: GetWorldTemplateBodyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetWorldTemplateBodyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getWorldTemplateBodyResponse?: shared.GetWorldTemplateBodyResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
