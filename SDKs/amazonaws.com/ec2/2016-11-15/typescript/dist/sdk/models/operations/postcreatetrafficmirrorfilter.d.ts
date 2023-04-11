import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateTrafficMirrorFilterActionEnum {
    CreateTrafficMirrorFilter = "CreateTrafficMirrorFilter"
}
export declare enum POSTCreateTrafficMirrorFilterVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateTrafficMirrorFilterRequest extends SpeakeasyBase {
    action: POSTCreateTrafficMirrorFilterActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateTrafficMirrorFilterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateTrafficMirrorFilterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
