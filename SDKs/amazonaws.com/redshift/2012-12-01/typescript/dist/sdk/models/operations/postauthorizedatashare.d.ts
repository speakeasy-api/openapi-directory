import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAuthorizeDataShareActionEnum {
    AuthorizeDataShare = "AuthorizeDataShare"
}
export declare enum POSTAuthorizeDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTAuthorizeDataShareRequest extends SpeakeasyBase {
    action: POSTAuthorizeDataShareActionEnum;
    requestBody?: Uint8Array;
    version: POSTAuthorizeDataShareVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAuthorizeDataShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
