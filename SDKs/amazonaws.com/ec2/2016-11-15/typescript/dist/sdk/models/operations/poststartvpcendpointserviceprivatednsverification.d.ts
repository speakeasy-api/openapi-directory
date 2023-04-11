import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTStartVpcEndpointServicePrivateDnsVerificationActionEnum {
    StartVpcEndpointServicePrivateDnsVerification = "StartVpcEndpointServicePrivateDnsVerification"
}
export declare enum POSTStartVpcEndpointServicePrivateDnsVerificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTStartVpcEndpointServicePrivateDnsVerificationRequest extends SpeakeasyBase {
    action: POSTStartVpcEndpointServicePrivateDnsVerificationActionEnum;
    requestBody?: Uint8Array;
    version: POSTStartVpcEndpointServicePrivateDnsVerificationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTStartVpcEndpointServicePrivateDnsVerificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
