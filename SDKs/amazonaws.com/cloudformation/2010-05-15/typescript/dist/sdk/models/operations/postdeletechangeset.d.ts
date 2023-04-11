import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteChangeSetActionEnum {
    DeleteChangeSet = "DeleteChangeSet"
}
export declare enum POSTDeleteChangeSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDeleteChangeSetRequest extends SpeakeasyBase {
    action: POSTDeleteChangeSetActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteChangeSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteChangeSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
