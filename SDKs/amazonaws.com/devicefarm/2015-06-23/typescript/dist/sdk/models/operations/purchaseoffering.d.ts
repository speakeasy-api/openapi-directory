import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PurchaseOfferingXAmzTargetEnum {
    DeviceFarm20150623PurchaseOffering = "DeviceFarm_20150623.PurchaseOffering"
}
export declare class PurchaseOfferingRequest extends SpeakeasyBase {
    purchaseOfferingRequest: shared.PurchaseOfferingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PurchaseOfferingXAmzTargetEnum;
}
export declare class PurchaseOfferingResponse extends SpeakeasyBase {
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
     * NotEligibleException
     */
    notEligibleException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    purchaseOfferingResult?: shared.PurchaseOfferingResult;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
