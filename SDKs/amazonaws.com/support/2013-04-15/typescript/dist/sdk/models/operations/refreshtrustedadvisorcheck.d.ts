import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RefreshTrustedAdvisorCheckXAmzTargetEnum {
    AWSSupport20130415RefreshTrustedAdvisorCheck = "AWSSupport_20130415.RefreshTrustedAdvisorCheck"
}
export declare class RefreshTrustedAdvisorCheckRequest extends SpeakeasyBase {
    refreshTrustedAdvisorCheckRequest: shared.RefreshTrustedAdvisorCheckRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RefreshTrustedAdvisorCheckXAmzTargetEnum;
}
export declare class RefreshTrustedAdvisorCheckResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    refreshTrustedAdvisorCheckResponse?: shared.RefreshTrustedAdvisorCheckResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
