import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum {
    AWSSupport20130415DescribeTrustedAdvisorCheckSummaries = "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries"
}
export declare class DescribeTrustedAdvisorCheckSummariesRequest extends SpeakeasyBase {
    describeTrustedAdvisorCheckSummariesRequest: shared.DescribeTrustedAdvisorCheckSummariesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum;
}
export declare class DescribeTrustedAdvisorCheckSummariesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTrustedAdvisorCheckSummariesResponse?: shared.DescribeTrustedAdvisorCheckSummariesResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
