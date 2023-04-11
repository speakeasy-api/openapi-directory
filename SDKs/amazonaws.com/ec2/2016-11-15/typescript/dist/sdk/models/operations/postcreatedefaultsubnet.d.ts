import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDefaultSubnetActionEnum {
    CreateDefaultSubnet = "CreateDefaultSubnet"
}
export declare enum POSTCreateDefaultSubnetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateDefaultSubnetRequest extends SpeakeasyBase {
    action: POSTCreateDefaultSubnetActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDefaultSubnetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDefaultSubnetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
