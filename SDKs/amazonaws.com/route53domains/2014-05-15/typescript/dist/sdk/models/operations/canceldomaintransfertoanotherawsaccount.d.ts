import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515CancelDomainTransferToAnotherAwsAccount = "Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount"
}
export declare class CancelDomainTransferToAnotherAwsAccountRequest extends SpeakeasyBase {
    cancelDomainTransferToAnotherAwsAccountRequest: shared.CancelDomainTransferToAnotherAwsAccountRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum;
}
export declare class CancelDomainTransferToAnotherAwsAccountResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelDomainTransferToAnotherAwsAccountResponse?: shared.CancelDomainTransferToAnotherAwsAccountResponse;
    contentType: string;
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
