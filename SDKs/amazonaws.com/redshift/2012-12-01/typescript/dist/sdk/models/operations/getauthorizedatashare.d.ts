import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAuthorizeDataShareActionEnum {
    AuthorizeDataShare = "AuthorizeDataShare"
}
export declare enum GETAuthorizeDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETAuthorizeDataShareRequest extends SpeakeasyBase {
    action: GETAuthorizeDataShareActionEnum;
    /**
     * The identifier of the data consumer that is authorized to access the datashare. This identifier is an Amazon Web Services account ID or a keyword, such as ADX.
     */
    consumerIdentifier: string;
    /**
     * The Amazon Resource Name (ARN) of the datashare that producers are to authorize sharing for.
     */
    dataShareArn: string;
    version: GETAuthorizeDataShareVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAuthorizeDataShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
