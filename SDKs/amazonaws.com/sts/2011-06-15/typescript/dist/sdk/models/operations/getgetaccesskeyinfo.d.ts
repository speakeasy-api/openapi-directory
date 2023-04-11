import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETAccessKeyInfoActionEnum {
    GetAccessKeyInfo = "GetAccessKeyInfo"
}
export declare enum GETGETAccessKeyInfoVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class GETGETAccessKeyInfoRequest extends SpeakeasyBase {
    /**
     * <p>The identifier of an access key.</p> <p>This parameter allows (through its regex pattern) a string of characters that can consist of any upper- or lowercase letter or digit.</p>
     */
    accessKeyId: string;
    action: GETGETAccessKeyInfoActionEnum;
    version: GETGETAccessKeyInfoVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETAccessKeyInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
