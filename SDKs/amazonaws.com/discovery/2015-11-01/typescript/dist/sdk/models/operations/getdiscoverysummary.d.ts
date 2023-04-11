import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDiscoverySummaryXAmzTargetEnum {
    AWSPoseidonServiceV20151101GetDiscoverySummary = "AWSPoseidonService_V2015_11_01.GetDiscoverySummary"
}
export declare class GetDiscoverySummaryRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDiscoverySummaryXAmzTargetEnum;
}
export declare class GetDiscoverySummaryResponse extends SpeakeasyBase {
    /**
     * AuthorizationErrorException
     */
    authorizationErrorException?: any;
    contentType: string;
    /**
     * Success
     */
    getDiscoverySummaryResponse?: shared.GetDiscoverySummaryResponse;
    /**
     * HomeRegionNotSetException
     */
    homeRegionNotSetException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
