import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealtimeLogConfig20200531RequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the real-time log configuration to get.
     */
    arn?: string;
    /**
     * The name of the real-time log configuration to get.
     */
    name?: string;
}
export declare class GetRealtimeLogConfig20200531Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRealtimeLogConfig20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
