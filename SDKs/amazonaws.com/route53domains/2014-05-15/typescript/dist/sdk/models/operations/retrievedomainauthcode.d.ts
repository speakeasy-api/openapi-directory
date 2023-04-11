import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RetrieveDomainAuthCodeXAmzTargetEnum {
    Route53DomainsV20140515RetrieveDomainAuthCode = "Route53Domains_v20140515.RetrieveDomainAuthCode"
}
export declare class RetrieveDomainAuthCodeRequest extends SpeakeasyBase {
    retrieveDomainAuthCodeRequest: shared.RetrieveDomainAuthCodeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RetrieveDomainAuthCodeXAmzTargetEnum;
}
export declare class RetrieveDomainAuthCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * Success
     */
    retrieveDomainAuthCodeResponse?: shared.RetrieveDomainAuthCodeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
}
