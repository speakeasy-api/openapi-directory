import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateInstanceEventWindowActionEnum {
    CreateInstanceEventWindow = "CreateInstanceEventWindow"
}
export declare enum POSTCreateInstanceEventWindowVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateInstanceEventWindowRequest extends SpeakeasyBase {
    action: POSTCreateInstanceEventWindowActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateInstanceEventWindowVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateInstanceEventWindowResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
