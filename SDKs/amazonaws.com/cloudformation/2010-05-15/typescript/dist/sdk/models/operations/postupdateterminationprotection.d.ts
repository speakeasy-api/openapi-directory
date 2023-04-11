import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateTerminationProtectionActionEnum {
    UpdateTerminationProtection = "UpdateTerminationProtection"
}
export declare enum POSTUpdateTerminationProtectionVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTUpdateTerminationProtectionRequest extends SpeakeasyBase {
    action: POSTUpdateTerminationProtectionActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateTerminationProtectionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateTerminationProtectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
