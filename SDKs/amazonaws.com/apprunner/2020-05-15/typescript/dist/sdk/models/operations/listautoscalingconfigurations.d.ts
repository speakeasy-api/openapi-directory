import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAutoScalingConfigurationsXAmzTargetEnum {
    AppRunnerListAutoScalingConfigurations = "AppRunner.ListAutoScalingConfigurations"
}
export declare class ListAutoScalingConfigurationsRequest extends SpeakeasyBase {
    listAutoScalingConfigurationsRequest: shared.ListAutoScalingConfigurationsRequest;
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
    xAmzTarget: ListAutoScalingConfigurationsXAmzTargetEnum;
}
export declare class ListAutoScalingConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listAutoScalingConfigurationsResponse?: shared.ListAutoScalingConfigurationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
