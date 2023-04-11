import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAcceptAddressTransferActionEnum {
    AcceptAddressTransfer = "AcceptAddressTransfer"
}
export declare enum POSTAcceptAddressTransferVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAcceptAddressTransferRequest extends SpeakeasyBase {
    action: POSTAcceptAddressTransferActionEnum;
    requestBody?: Uint8Array;
    version: POSTAcceptAddressTransferVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAcceptAddressTransferResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
