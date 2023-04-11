import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyVpcEndpointServicePayerResponsibilityActionEnum {
    ModifyVpcEndpointServicePayerResponsibility = "ModifyVpcEndpointServicePayerResponsibility"
}
/**
 * The entity that is responsible for the endpoint costs. The default is the endpoint owner. If you set the payer responsibility to the service owner, you cannot set it back to the endpoint owner.
 */
export declare enum GETModifyVpcEndpointServicePayerResponsibilityPayerResponsibilityEnum {
    ServiceOwner = "ServiceOwner"
}
export declare enum GETModifyVpcEndpointServicePayerResponsibilityVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyVpcEndpointServicePayerResponsibilityRequest extends SpeakeasyBase {
    action: GETModifyVpcEndpointServicePayerResponsibilityActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The entity that is responsible for the endpoint costs. The default is the endpoint owner. If you set the payer responsibility to the service owner, you cannot set it back to the endpoint owner.
     */
    payerResponsibility: GETModifyVpcEndpointServicePayerResponsibilityPayerResponsibilityEnum;
    /**
     * The ID of the service.
     */
    serviceId: string;
    version: GETModifyVpcEndpointServicePayerResponsibilityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyVpcEndpointServicePayerResponsibilityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
