import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETReleaseAddressActionEnum {
    ReleaseAddress = "ReleaseAddress"
}
export declare enum GETReleaseAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETReleaseAddressRequest extends SpeakeasyBase {
    action: GETReleaseAddressActionEnum;
    /**
     * [EC2-VPC] The allocation ID. Required for EC2-VPC.
     */
    allocationId?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises IP addresses.</p> <p>If you provide an incorrect network border group, you receive an <code>InvalidAddress.NotFound</code> error.</p> <p>You cannot use a network border group with EC2 Classic. If you attempt this operation on EC2 classic, you receive an <code>InvalidParameterCombination</code> error.</p>
     */
    networkBorderGroup?: string;
    /**
     * [EC2-Classic] The Elastic IP address. Required for EC2-Classic.
     */
    publicIp?: string;
    version: GETReleaseAddressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETReleaseAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
