import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETResetAddressAttributeActionEnum {
    ResetAddressAttribute = "ResetAddressAttribute"
}
/**
 * The attribute of the IP address.
 */
export declare enum GETResetAddressAttributeAttributeEnum {
    DomainName = "domain-name"
}
export declare enum GETResetAddressAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETResetAddressAttributeRequest extends SpeakeasyBase {
    action: GETResetAddressAttributeActionEnum;
    /**
     * [EC2-VPC] The allocation ID.
     */
    allocationId: string;
    /**
     * The attribute of the IP address.
     */
    attribute: GETResetAddressAttributeAttributeEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETResetAddressAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETResetAddressAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
