import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssociateApplicationsRequestBody extends SpeakeasyBase {
    /**
     * Application IDs list.
     */
    applicationIDs: string[];
    /**
     * Wave ID.
     */
    waveID: string;
}
export declare class AssociateApplicationsRequest extends SpeakeasyBase {
    requestBody: AssociateApplicationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateApplicationsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateApplicationsResponse?: Record<string, any>;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
