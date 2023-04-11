import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteApplicationRequestBody extends SpeakeasyBase {
    /**
     * Application ID.
     */
    applicationID: string;
}
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    requestBody: DeleteApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteApplicationResponse?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
