import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateVerifiedAccessInstanceActionEnum {
    CreateVerifiedAccessInstance = "CreateVerifiedAccessInstance"
}
export declare enum POSTCreateVerifiedAccessInstanceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateVerifiedAccessInstanceRequest extends SpeakeasyBase {
    action: POSTCreateVerifiedAccessInstanceActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateVerifiedAccessInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateVerifiedAccessInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
