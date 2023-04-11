import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRejectVpcPeeringConnectionActionEnum {
    RejectVpcPeeringConnection = "RejectVpcPeeringConnection"
}
export declare enum POSTRejectVpcPeeringConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTRejectVpcPeeringConnectionRequest extends SpeakeasyBase {
    action: POSTRejectVpcPeeringConnectionActionEnum;
    requestBody?: Uint8Array;
    version: POSTRejectVpcPeeringConnectionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRejectVpcPeeringConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
