import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPurchaseHostReservationActionEnum {
    PurchaseHostReservation = "PurchaseHostReservation"
}
export declare enum POSTPurchaseHostReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTPurchaseHostReservationRequest extends SpeakeasyBase {
    action: POSTPurchaseHostReservationActionEnum;
    requestBody?: Uint8Array;
    version: POSTPurchaseHostReservationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPurchaseHostReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
