import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateChangeSetActionEnum {
    CreateChangeSet = "CreateChangeSet"
}
export declare enum POSTCreateChangeSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTCreateChangeSetRequest extends SpeakeasyBase {
    action: POSTCreateChangeSetActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateChangeSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateChangeSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
