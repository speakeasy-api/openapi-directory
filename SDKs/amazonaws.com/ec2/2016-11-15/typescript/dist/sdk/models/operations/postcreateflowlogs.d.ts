import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateFlowLogsActionEnum {
    CreateFlowLogs = "CreateFlowLogs"
}
export declare enum POSTCreateFlowLogsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateFlowLogsRequest extends SpeakeasyBase {
    action: POSTCreateFlowLogsActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateFlowLogsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateFlowLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
