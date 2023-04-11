import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssociateSourceServersRequestBody extends SpeakeasyBase {
    /**
     * Application ID.
     */
    applicationID: string;
    /**
     * Source server IDs list.
     */
    sourceServerIDs: string[];
}
export declare class AssociateSourceServersRequest extends SpeakeasyBase {
    requestBody: AssociateSourceServersRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateSourceServersResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateSourceServersResponse?: Record<string, any>;
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
