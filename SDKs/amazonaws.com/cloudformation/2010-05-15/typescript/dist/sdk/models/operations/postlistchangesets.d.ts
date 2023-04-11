import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListChangeSetsActionEnum {
    ListChangeSets = "ListChangeSets"
}
export declare enum POSTListChangeSetsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTListChangeSetsRequest extends SpeakeasyBase {
    action: POSTListChangeSetsActionEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTListChangeSetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListChangeSetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
