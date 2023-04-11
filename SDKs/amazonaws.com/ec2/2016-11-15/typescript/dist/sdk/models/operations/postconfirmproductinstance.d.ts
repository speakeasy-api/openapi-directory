import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTConfirmProductInstanceActionEnum {
    ConfirmProductInstance = "ConfirmProductInstance"
}
export declare enum POSTConfirmProductInstanceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTConfirmProductInstanceRequest extends SpeakeasyBase {
    action: POSTConfirmProductInstanceActionEnum;
    requestBody?: Uint8Array;
    version: POSTConfirmProductInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTConfirmProductInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
