import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTStartInstanceRefreshActionEnum {
    StartInstanceRefresh = "StartInstanceRefresh"
}
export declare enum POSTStartInstanceRefreshVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTStartInstanceRefreshRequest extends SpeakeasyBase {
    action: POSTStartInstanceRefreshActionEnum;
    requestBody?: Uint8Array;
    version: POSTStartInstanceRefreshVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTStartInstanceRefreshResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
