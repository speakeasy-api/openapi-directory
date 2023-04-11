import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTExecuteChangeSetActionEnum {
    ExecuteChangeSet = "ExecuteChangeSet"
}
export declare enum POSTExecuteChangeSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTExecuteChangeSetRequest extends SpeakeasyBase {
    action: POSTExecuteChangeSetActionEnum;
    requestBody?: Uint8Array;
    version: POSTExecuteChangeSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTExecuteChangeSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
