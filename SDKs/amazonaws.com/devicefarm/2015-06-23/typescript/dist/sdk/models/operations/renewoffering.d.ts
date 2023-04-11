import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RenewOfferingXAmzTargetEnum {
    DeviceFarm20150623RenewOffering = "DeviceFarm_20150623.RenewOffering"
}
export declare class RenewOfferingRequest extends SpeakeasyBase {
    renewOfferingRequest: shared.RenewOfferingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RenewOfferingXAmzTargetEnum;
}
export declare class RenewOfferingResponse extends SpeakeasyBase {
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
    renewOfferingResult?: shared.RenewOfferingResult;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
