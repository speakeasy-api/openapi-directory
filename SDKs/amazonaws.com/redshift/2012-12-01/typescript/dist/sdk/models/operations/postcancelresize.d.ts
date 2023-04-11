import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCancelResizeActionEnum {
    CancelResize = "CancelResize"
}
export declare enum POSTCancelResizeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTCancelResizeRequest extends SpeakeasyBase {
    action: POSTCancelResizeActionEnum;
    requestBody?: Uint8Array;
    version: POSTCancelResizeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCancelResizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
