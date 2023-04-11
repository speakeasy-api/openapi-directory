import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum {
    AWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatuses = "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses"
}
export declare class DescribeTrustedAdvisorCheckRefreshStatusesRequest extends SpeakeasyBase {
    describeTrustedAdvisorCheckRefreshStatusesRequest: shared.DescribeTrustedAdvisorCheckRefreshStatusesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum;
}
export declare class DescribeTrustedAdvisorCheckRefreshStatusesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTrustedAdvisorCheckRefreshStatusesResponse?: shared.DescribeTrustedAdvisorCheckRefreshStatusesResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
