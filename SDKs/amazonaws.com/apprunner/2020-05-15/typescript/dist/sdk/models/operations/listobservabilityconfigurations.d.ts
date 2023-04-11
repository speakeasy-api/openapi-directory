import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListObservabilityConfigurationsXAmzTargetEnum {
    AppRunnerListObservabilityConfigurations = "AppRunner.ListObservabilityConfigurations"
}
export declare class ListObservabilityConfigurationsRequest extends SpeakeasyBase {
    listObservabilityConfigurationsRequest: shared.ListObservabilityConfigurationsRequest;
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
    xAmzTarget: ListObservabilityConfigurationsXAmzTargetEnum;
}
export declare class ListObservabilityConfigurationsResponse extends SpeakeasyBase {
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
    listObservabilityConfigurationsResponse?: shared.ListObservabilityConfigurationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
