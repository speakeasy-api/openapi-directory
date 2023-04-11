import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CheckDomainTransferabilityXAmzTargetEnum {
    Route53DomainsV20140515CheckDomainTransferability = "Route53Domains_v20140515.CheckDomainTransferability"
}
export declare class CheckDomainTransferabilityRequest extends SpeakeasyBase {
    checkDomainTransferabilityRequest: shared.CheckDomainTransferabilityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CheckDomainTransferabilityXAmzTargetEnum;
}
export declare class CheckDomainTransferabilityResponse extends SpeakeasyBase {
    /**
     * Success
     */
    checkDomainTransferabilityResponse?: shared.CheckDomainTransferabilityResponse;
    contentType: string;
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
