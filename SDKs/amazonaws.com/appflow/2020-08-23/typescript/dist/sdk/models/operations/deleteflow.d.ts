import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFlowRequestBody extends SpeakeasyBase {
    /**
     *  The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
     */
    flowName: string;
    /**
     *  Indicates whether Amazon AppFlow should delete the flow, even if it is currently in use.
     */
    forceDelete?: boolean;
}
export declare class DeleteFlowRequest extends SpeakeasyBase {
    requestBody: DeleteFlowRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFlowResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteFlowResponse?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
