import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccount = "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount"
}
export declare class AcceptDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
    acceptDomainTransferFromAnotherAwsAccountRequest: shared.AcceptDomainTransferFromAnotherAwsAccountRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
}
export declare class AcceptDomainTransferFromAnotherAwsAccountResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptDomainTransferFromAnotherAwsAccountResponse?: shared.AcceptDomainTransferFromAnotherAwsAccountResponse;
    contentType: string;
    /**
     * DomainLimitExceeded
     */
    domainLimitExceeded?: any;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * OperationLimitExceeded
     */
    operationLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
}
