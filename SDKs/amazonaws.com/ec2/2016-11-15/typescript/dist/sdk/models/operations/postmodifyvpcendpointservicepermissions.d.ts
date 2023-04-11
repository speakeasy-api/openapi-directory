import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVpcEndpointServicePermissionsActionEnum {
    ModifyVpcEndpointServicePermissions = "ModifyVpcEndpointServicePermissions"
}
export declare enum POSTModifyVpcEndpointServicePermissionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVpcEndpointServicePermissionsRequest extends SpeakeasyBase {
    action: POSTModifyVpcEndpointServicePermissionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVpcEndpointServicePermissionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVpcEndpointServicePermissionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
