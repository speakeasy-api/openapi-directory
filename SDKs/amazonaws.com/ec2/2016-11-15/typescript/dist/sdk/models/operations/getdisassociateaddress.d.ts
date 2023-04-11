import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisassociateAddressActionEnum {
    DisassociateAddress = "DisassociateAddress"
}
export declare enum GETDisassociateAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDisassociateAddressRequest extends SpeakeasyBase {
    action: GETDisassociateAddressActionEnum;
    /**
     * [EC2-VPC] The association ID. Required for EC2-VPC.
     */
    associationId?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * [EC2-Classic] The Elastic IP address. Required for EC2-Classic.
     */
    publicIp?: string;
    version: GETDisassociateAddressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisassociateAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
