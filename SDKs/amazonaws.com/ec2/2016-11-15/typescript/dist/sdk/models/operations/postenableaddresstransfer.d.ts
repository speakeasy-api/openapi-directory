import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableAddressTransferActionEnum {
    EnableAddressTransfer = "EnableAddressTransfer"
}
export declare enum POSTEnableAddressTransferVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTEnableAddressTransferRequest extends SpeakeasyBase {
    action: POSTEnableAddressTransferActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableAddressTransferVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableAddressTransferResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
