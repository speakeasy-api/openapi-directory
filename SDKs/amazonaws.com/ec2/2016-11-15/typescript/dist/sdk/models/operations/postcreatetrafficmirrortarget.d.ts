import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateTrafficMirrorTargetActionEnum {
    CreateTrafficMirrorTarget = "CreateTrafficMirrorTarget"
}
export declare enum POSTCreateTrafficMirrorTargetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateTrafficMirrorTargetRequest extends SpeakeasyBase {
    action: POSTCreateTrafficMirrorTargetActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateTrafficMirrorTargetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateTrafficMirrorTargetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
