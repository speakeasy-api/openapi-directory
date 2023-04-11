import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateStackSetActionEnum {
    CreateStackSet = "CreateStackSet"
}
export declare enum POSTCreateStackSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTCreateStackSetRequest extends SpeakeasyBase {
    action: POSTCreateStackSetActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateStackSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateStackSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
