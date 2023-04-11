import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETAccessKeyLastUsedActionEnum {
    GetAccessKeyLastUsed = "GetAccessKeyLastUsed"
}
export declare enum GETGETAccessKeyLastUsedVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETGETAccessKeyLastUsedRequest extends SpeakeasyBase {
    /**
     * <p>The identifier of an access key.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
     */
    accessKeyId: string;
    action: GETGETAccessKeyLastUsedActionEnum;
    version: GETGETAccessKeyLastUsedVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETAccessKeyLastUsedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
