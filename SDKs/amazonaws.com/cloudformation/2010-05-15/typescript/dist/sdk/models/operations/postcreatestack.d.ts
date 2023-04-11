import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateStackActionEnum {
    CreateStack = "CreateStack"
}
export declare enum POSTCreateStackVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTCreateStackRequest extends SpeakeasyBase {
    action: POSTCreateStackActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateStackVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateStackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
