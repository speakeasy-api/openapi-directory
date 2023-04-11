import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTrustedAdvisorCheckResultXAmzTargetEnum {
    AWSSupport20130415DescribeTrustedAdvisorCheckResult = "AWSSupport_20130415.DescribeTrustedAdvisorCheckResult"
}
export declare class DescribeTrustedAdvisorCheckResultRequest extends SpeakeasyBase {
    describeTrustedAdvisorCheckResultRequest: shared.DescribeTrustedAdvisorCheckResultRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrustedAdvisorCheckResultXAmzTargetEnum;
}
export declare class DescribeTrustedAdvisorCheckResultResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTrustedAdvisorCheckResultResponse?: shared.DescribeTrustedAdvisorCheckResultResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
