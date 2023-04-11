import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeprovisionIpamPoolCidrActionEnum {
    DeprovisionIpamPoolCidr = "DeprovisionIpamPoolCidr"
}
export declare enum GETDeprovisionIpamPoolCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeprovisionIpamPoolCidrRequest extends SpeakeasyBase {
    action: GETDeprovisionIpamPoolCidrActionEnum;
    /**
     * The CIDR which you want to deprovision from the pool.
     */
    cidr?: string;
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the pool that has the CIDR you want to deprovision.
     */
    ipamPoolId: string;
    version: GETDeprovisionIpamPoolCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeprovisionIpamPoolCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
