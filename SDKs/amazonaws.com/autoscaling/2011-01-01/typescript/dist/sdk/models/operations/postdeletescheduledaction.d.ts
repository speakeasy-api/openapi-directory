import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteScheduledActionActionEnum {
    DeleteScheduledAction = "DeleteScheduledAction"
}
export declare enum POSTDeleteScheduledActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTDeleteScheduledActionRequest extends SpeakeasyBase {
    action: POSTDeleteScheduledActionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteScheduledActionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteScheduledActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
