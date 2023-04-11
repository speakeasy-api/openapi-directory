import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateVpcPeeringConnectionActionEnum {
    CreateVpcPeeringConnection = "CreateVpcPeeringConnection"
}
export declare enum POSTCreateVpcPeeringConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateVpcPeeringConnectionRequest extends SpeakeasyBase {
    action: POSTCreateVpcPeeringConnectionActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateVpcPeeringConnectionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateVpcPeeringConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
