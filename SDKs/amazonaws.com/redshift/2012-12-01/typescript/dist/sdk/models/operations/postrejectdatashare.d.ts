import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRejectDataShareActionEnum {
    RejectDataShare = "RejectDataShare"
}
export declare enum POSTRejectDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTRejectDataShareRequest extends SpeakeasyBase {
    action: POSTRejectDataShareActionEnum;
    requestBody?: Uint8Array;
    version: POSTRejectDataShareVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRejectDataShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
