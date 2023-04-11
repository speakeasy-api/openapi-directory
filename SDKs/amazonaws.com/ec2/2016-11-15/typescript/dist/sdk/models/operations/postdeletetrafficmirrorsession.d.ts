import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteTrafficMirrorSessionActionEnum {
    DeleteTrafficMirrorSession = "DeleteTrafficMirrorSession"
}
export declare enum POSTDeleteTrafficMirrorSessionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteTrafficMirrorSessionRequest extends SpeakeasyBase {
    action: POSTDeleteTrafficMirrorSessionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteTrafficMirrorSessionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteTrafficMirrorSessionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
