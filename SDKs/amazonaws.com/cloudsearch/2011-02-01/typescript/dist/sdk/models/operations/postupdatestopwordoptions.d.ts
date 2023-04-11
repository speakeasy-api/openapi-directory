import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateStopwordOptionsActionEnum {
    UpdateStopwordOptions = "UpdateStopwordOptions"
}
export declare enum POSTUpdateStopwordOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class POSTUpdateStopwordOptionsRequest extends SpeakeasyBase {
    action: POSTUpdateStopwordOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateStopwordOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateStopwordOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
