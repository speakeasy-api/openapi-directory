import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteWorldTemplateRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (arn) of the world template you want to delete.
     */
    template: string;
}
export declare class DeleteWorldTemplateRequest extends SpeakeasyBase {
    requestBody: DeleteWorldTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteWorldTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteWorldTemplateResponse?: Record<string, any>;
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
