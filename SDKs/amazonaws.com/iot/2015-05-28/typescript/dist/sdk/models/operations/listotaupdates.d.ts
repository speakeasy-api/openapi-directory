import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The OTA update job status.
 */
export declare enum ListOTAUpdatesOTAUpdateStatusEnum {
    CreatePending = "CREATE_PENDING",
    CreateInProgress = "CREATE_IN_PROGRESS",
    CreateComplete = "CREATE_COMPLETE",
    CreateFailed = "CREATE_FAILED"
}
export declare class ListOTAUpdatesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: number;
    /**
     * A token used to retrieve the next set of results.
     */
    nextToken?: string;
    /**
     * The OTA update job status.
     */
    otaUpdateStatus?: ListOTAUpdatesOTAUpdateStatusEnum;
}
export declare class ListOTAUpdatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listOTAUpdatesResponse?: shared.ListOTAUpdatesResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
