import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListOfferingsXAmzTargetEnum {
    DeviceFarm20150623ListOfferings = "DeviceFarm_20150623.ListOfferings"
}
export declare class ListOfferingsRequest extends SpeakeasyBase {
    listOfferingsRequest: shared.ListOfferingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOfferingsXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListOfferingsResponse extends SpeakeasyBase {
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
    listOfferingsResult?: shared.ListOfferingsResult;
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
