import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETListStacksActionEnum {
    ListStacks = "ListStacks"
}
export declare enum GETListStacksVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETListStacksRequest extends SpeakeasyBase {
    action: GETListStacksActionEnum;
    /**
     * A string that identifies the next page of stacks that you want to retrieve.
     */
    nextToken?: string;
    /**
     * Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the <code>StackStatus</code> parameter of the <a>Stack</a> data type.
     */
    stackStatusFilter?: shared.StackStatusEnum[];
    version: GETListStacksVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListStacksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
