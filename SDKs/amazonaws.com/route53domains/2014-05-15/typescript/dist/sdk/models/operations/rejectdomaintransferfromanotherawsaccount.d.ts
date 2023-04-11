import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515RejectDomainTransferFromAnotherAwsAccount = "Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount"
}
export declare class RejectDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
    rejectDomainTransferFromAnotherAwsAccountRequest: shared.RejectDomainTransferFromAnotherAwsAccountRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
}
export declare class RejectDomainTransferFromAnotherAwsAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * OperationLimitExceeded
     */
    operationLimitExceeded?: any;
    /**
     * Success
     */
    rejectDomainTransferFromAnotherAwsAccountResponse?: shared.RejectDomainTransferFromAnotherAwsAccountResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
}
