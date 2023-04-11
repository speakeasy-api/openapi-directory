import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyVpcTenancyActionEnum {
    ModifyVpcTenancy = "ModifyVpcTenancy"
}
/**
 * The instance tenancy attribute for the VPC.
 */
export declare enum GETModifyVpcTenancyInstanceTenancyEnum {
    Default = "default"
}
export declare enum GETModifyVpcTenancyVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyVpcTenancyRequest extends SpeakeasyBase {
    action: GETModifyVpcTenancyActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The instance tenancy attribute for the VPC.
     */
    instanceTenancy: GETModifyVpcTenancyInstanceTenancyEnum;
    version: GETModifyVpcTenancyVersionEnum;
    /**
     * The ID of the VPC.
     */
    vpcId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyVpcTenancyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
