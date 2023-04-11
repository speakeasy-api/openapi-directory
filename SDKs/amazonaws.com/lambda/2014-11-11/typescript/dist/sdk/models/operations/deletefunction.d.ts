import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteFunctionRequest extends SpeakeasyBase {
    /**
     * The Lambda function to delete.
     */
    functionName: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFunctionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
    /**
     * ServiceException
     */
    serviceException?: shared.ServiceException;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
