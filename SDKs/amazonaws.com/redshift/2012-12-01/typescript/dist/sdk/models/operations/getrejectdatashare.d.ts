import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRejectDataShareActionEnum {
    RejectDataShare = "RejectDataShare"
}
export declare enum GETRejectDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETRejectDataShareRequest extends SpeakeasyBase {
    action: GETRejectDataShareActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the datashare to reject.
     */
    dataShareArn: string;
    version: GETRejectDataShareVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRejectDataShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
