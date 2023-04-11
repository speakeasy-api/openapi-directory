import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListOfferingPromotionsXAmzTargetEnum {
    DeviceFarm20150623ListOfferingPromotions = "DeviceFarm_20150623.ListOfferingPromotions"
}
export declare class ListOfferingPromotionsRequest extends SpeakeasyBase {
    listOfferingPromotionsRequest: shared.ListOfferingPromotionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOfferingPromotionsXAmzTargetEnum;
}
export declare class ListOfferingPromotionsResponse extends SpeakeasyBase {
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
    listOfferingPromotionsResult?: shared.ListOfferingPromotionsResult;
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
