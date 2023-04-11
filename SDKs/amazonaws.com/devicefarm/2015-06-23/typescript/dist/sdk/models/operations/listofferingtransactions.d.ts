import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListOfferingTransactionsXAmzTargetEnum {
    DeviceFarm20150623ListOfferingTransactions = "DeviceFarm_20150623.ListOfferingTransactions"
}
export declare class ListOfferingTransactionsRequest extends SpeakeasyBase {
    listOfferingTransactionsRequest: shared.ListOfferingTransactionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOfferingTransactionsXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListOfferingTransactionsResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listOfferingTransactionsResult?: shared.ListOfferingTransactionsResult;
    /**
     * NotEligibleException
     */
    notEligibleException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
