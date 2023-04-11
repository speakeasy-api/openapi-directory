import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateTrafficMirrorSessionActionEnum {
    CreateTrafficMirrorSession = "CreateTrafficMirrorSession"
}
export declare enum POSTCreateTrafficMirrorSessionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateTrafficMirrorSessionRequest extends SpeakeasyBase {
    action: POSTCreateTrafficMirrorSessionActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateTrafficMirrorSessionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateTrafficMirrorSessionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
