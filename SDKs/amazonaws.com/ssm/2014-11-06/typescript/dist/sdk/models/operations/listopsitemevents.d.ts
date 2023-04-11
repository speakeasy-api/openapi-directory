import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListOpsItemEventsXAmzTargetEnum {
    AmazonSSMListOpsItemEvents = "AmazonSSM.ListOpsItemEvents"
}
export declare class ListOpsItemEventsRequest extends SpeakeasyBase {
    listOpsItemEventsRequest: shared.ListOpsItemEventsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOpsItemEventsXAmzTargetEnum;
}
export declare class ListOpsItemEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    listOpsItemEventsResponse?: shared.ListOpsItemEventsResponse;
    /**
     * OpsItemInvalidParameterException
     */
    opsItemInvalidParameterException?: any;
    /**
     * OpsItemLimitExceededException
     */
    opsItemLimitExceededException?: any;
    /**
     * OpsItemNotFoundException
     */
    opsItemNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
