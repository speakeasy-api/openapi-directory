import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDomainDetailXAmzTargetEnum {
    Route53DomainsV20140515GetDomainDetail = "Route53Domains_v20140515.GetDomainDetail"
}
export declare class GetDomainDetailRequest extends SpeakeasyBase {
    getDomainDetailRequest: shared.GetDomainDetailRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDomainDetailXAmzTargetEnum;
}
export declare class GetDomainDetailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDomainDetailResponse?: shared.GetDomainDetailResponse;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
}
