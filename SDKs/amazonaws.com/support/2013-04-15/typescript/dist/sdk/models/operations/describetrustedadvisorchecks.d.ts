import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTrustedAdvisorChecksXAmzTargetEnum {
    AWSSupport20130415DescribeTrustedAdvisorChecks = "AWSSupport_20130415.DescribeTrustedAdvisorChecks"
}
export declare class DescribeTrustedAdvisorChecksRequest extends SpeakeasyBase {
    describeTrustedAdvisorChecksRequest: shared.DescribeTrustedAdvisorChecksRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrustedAdvisorChecksXAmzTargetEnum;
}
export declare class DescribeTrustedAdvisorChecksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTrustedAdvisorChecksResponse?: shared.DescribeTrustedAdvisorChecksResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
