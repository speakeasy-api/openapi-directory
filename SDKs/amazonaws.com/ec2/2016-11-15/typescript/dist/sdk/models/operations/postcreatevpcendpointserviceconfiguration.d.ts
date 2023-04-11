import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateVpcEndpointServiceConfigurationActionEnum {
    CreateVpcEndpointServiceConfiguration = "CreateVpcEndpointServiceConfiguration"
}
export declare enum POSTCreateVpcEndpointServiceConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateVpcEndpointServiceConfigurationRequest extends SpeakeasyBase {
    action: POSTCreateVpcEndpointServiceConfigurationActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateVpcEndpointServiceConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateVpcEndpointServiceConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
