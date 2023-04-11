import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateReplicationSetRequestBody extends SpeakeasyBase {
    /**
     * A token that ensures that the operation is called only once with the specified details.
     */
    clientToken?: string;
    /**
     * The Regions that Incident Manager replicates your data to. You can have up to three Regions in your replication set.
     */
    regions: Record<string, shared.RegionMapInputValue>;
    /**
     * A list of tags to add to the replication set.
     */
    tags?: Record<string, string>;
}
export declare class CreateReplicationSetRequest extends SpeakeasyBase {
    requestBody: CreateReplicationSetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateReplicationSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createReplicationSetOutput?: shared.CreateReplicationSetOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
