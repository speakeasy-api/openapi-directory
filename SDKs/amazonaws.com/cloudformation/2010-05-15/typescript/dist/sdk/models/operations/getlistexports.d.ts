import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListExportsActionEnum {
    ListExports = "ListExports"
}
export declare enum GETListExportsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETListExportsRequest extends SpeakeasyBase {
    action: GETListExportsActionEnum;
    /**
     * A string (provided by the <a>ListExports</a> response output) that identifies the next page of exported output values that you asked to retrieve.
     */
    nextToken?: string;
    version: GETListExportsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListExportsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
