import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVerifiedAccessEndpointActionEnum {
    ModifyVerifiedAccessEndpoint = "ModifyVerifiedAccessEndpoint"
}
export declare enum POSTModifyVerifiedAccessEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVerifiedAccessEndpointRequest extends SpeakeasyBase {
    action: POSTModifyVerifiedAccessEndpointActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVerifiedAccessEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVerifiedAccessEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
