import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETEnableAddressTransferActionEnum {
    EnableAddressTransfer = "EnableAddressTransfer"
}
export declare enum GETEnableAddressTransferVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETEnableAddressTransferRequest extends SpeakeasyBase {
    action: GETEnableAddressTransferActionEnum;
    /**
     * The allocation ID of an Elastic IP address.
     */
    allocationId: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the account that you want to transfer the Elastic IP address to.
     */
    transferAccountId: string;
    version: GETEnableAddressTransferVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETEnableAddressTransferResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
