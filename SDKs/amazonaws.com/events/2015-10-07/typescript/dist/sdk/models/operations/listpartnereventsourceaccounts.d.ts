import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPartnerEventSourceAccountsXAmzTargetEnum {
    AWSEventsListPartnerEventSourceAccounts = "AWSEvents.ListPartnerEventSourceAccounts"
}
export declare class ListPartnerEventSourceAccountsRequest extends SpeakeasyBase {
    listPartnerEventSourceAccountsRequest: shared.ListPartnerEventSourceAccountsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPartnerEventSourceAccountsXAmzTargetEnum;
}
export declare class ListPartnerEventSourceAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * Success
     */
    listPartnerEventSourceAccountsResponse?: shared.ListPartnerEventSourceAccountsResponse;
    /**
     * OperationDisabledException
     */
    operationDisabledException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
