import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisableAddressTransferActionEnum {
    DisableAddressTransfer = "DisableAddressTransfer"
}
export declare enum POSTDisableAddressTransferVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisableAddressTransferRequest extends SpeakeasyBase {
    action: POSTDisableAddressTransferActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisableAddressTransferVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisableAddressTransferResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
