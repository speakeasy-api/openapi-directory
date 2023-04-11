import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TransferDomainToAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515TransferDomainToAnotherAwsAccount = "Route53Domains_v20140515.TransferDomainToAnotherAwsAccount"
}
export declare class TransferDomainToAnotherAwsAccountRequest extends SpeakeasyBase {
    transferDomainToAnotherAwsAccountRequest: shared.TransferDomainToAnotherAwsAccountRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TransferDomainToAnotherAwsAccountXAmzTargetEnum;
}
export declare class TransferDomainToAnotherAwsAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DuplicateRequest
     */
    duplicateRequest?: any;
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
     * Success
     */
    transferDomainToAnotherAwsAccountResponse?: shared.TransferDomainToAnotherAwsAccountResponse;
    /**
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
}
