import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetOfferingStatusXAmzTargetEnum {
    DeviceFarm20150623GetOfferingStatus = "DeviceFarm_20150623.GetOfferingStatus"
}
export declare class GetOfferingStatusRequest extends SpeakeasyBase {
    getOfferingStatusRequest: shared.GetOfferingStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOfferingStatusXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetOfferingStatusResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    getOfferingStatusResult?: shared.GetOfferingStatusResult;
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
     * ServiceAccountException
     */
    serviceAccountException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
