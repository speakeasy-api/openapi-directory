import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVpcEndpointServicePayerResponsibilityActionEnum {
    ModifyVpcEndpointServicePayerResponsibility = "ModifyVpcEndpointServicePayerResponsibility"
}
export declare enum POSTModifyVpcEndpointServicePayerResponsibilityVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVpcEndpointServicePayerResponsibilityRequest extends SpeakeasyBase {
    action: POSTModifyVpcEndpointServicePayerResponsibilityActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVpcEndpointServicePayerResponsibilityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVpcEndpointServicePayerResponsibilityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
