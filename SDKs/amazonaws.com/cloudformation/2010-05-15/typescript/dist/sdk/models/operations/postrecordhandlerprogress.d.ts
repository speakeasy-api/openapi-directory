import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRecordHandlerProgressActionEnum {
    RecordHandlerProgress = "RecordHandlerProgress"
}
export declare enum POSTRecordHandlerProgressVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTRecordHandlerProgressRequest extends SpeakeasyBase {
    action: POSTRecordHandlerProgressActionEnum;
    requestBody?: Uint8Array;
    version: POSTRecordHandlerProgressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRecordHandlerProgressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
