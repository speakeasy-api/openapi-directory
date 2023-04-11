import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVerifiedAccessInstanceActionEnum {
    ModifyVerifiedAccessInstance = "ModifyVerifiedAccessInstance"
}
export declare enum POSTModifyVerifiedAccessInstanceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVerifiedAccessInstanceRequest extends SpeakeasyBase {
    action: POSTModifyVerifiedAccessInstanceActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVerifiedAccessInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVerifiedAccessInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
