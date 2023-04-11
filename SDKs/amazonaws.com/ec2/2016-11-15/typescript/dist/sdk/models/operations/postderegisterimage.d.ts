import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeregisterImageActionEnum {
    DeregisterImage = "DeregisterImage"
}
export declare enum POSTDeregisterImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeregisterImageRequest extends SpeakeasyBase {
    action: POSTDeregisterImageActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeregisterImageVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeregisterImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
