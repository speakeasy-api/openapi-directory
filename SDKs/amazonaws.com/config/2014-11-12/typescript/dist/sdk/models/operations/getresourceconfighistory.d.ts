import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResourceConfigHistoryXAmzTargetEnum {
    StarlingDoveServiceGetResourceConfigHistory = "StarlingDoveService.GetResourceConfigHistory"
}
export declare class GetResourceConfigHistoryRequest extends SpeakeasyBase {
    getResourceConfigHistoryRequest: shared.GetResourceConfigHistoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourceConfigHistoryXAmzTargetEnum;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetResourceConfigHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourceConfigHistoryResponse?: shared.GetResourceConfigHistoryResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidTimeRangeException
     */
    invalidTimeRangeException?: any;
    /**
     * NoAvailableConfigurationRecorderException
     */
    noAvailableConfigurationRecorderException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotDiscoveredException
     */
    resourceNotDiscoveredException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
