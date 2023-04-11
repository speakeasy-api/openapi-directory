import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListChangeSetsActionEnum {
    ListChangeSets = "ListChangeSets"
}
export declare enum GETListChangeSetsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETListChangeSetsRequest extends SpeakeasyBase {
    action: GETListChangeSetsActionEnum;
    /**
     * A string (provided by the <a>ListChangeSets</a> response output) that identifies the next page of change sets that you want to retrieve.
     */
    nextToken?: string;
    /**
     * The name or the Amazon Resource Name (ARN) of the stack for which you want to list change sets.
     */
    stackName: string;
    version: GETListChangeSetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListChangeSetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
