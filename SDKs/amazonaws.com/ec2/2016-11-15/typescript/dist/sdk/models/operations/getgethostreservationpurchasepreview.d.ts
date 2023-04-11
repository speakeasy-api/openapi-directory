import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETHostReservationPurchasePreviewActionEnum {
    GetHostReservationPurchasePreview = "GetHostReservationPurchasePreview"
}
export declare enum GETGETHostReservationPurchasePreviewVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETGETHostReservationPurchasePreviewRequest extends SpeakeasyBase {
    action: GETGETHostReservationPurchasePreviewActionEnum;
    /**
     * The IDs of the Dedicated Hosts with which the reservation is associated.
     */
    hostIdSet: string[];
    /**
     * The offering ID of the reservation.
     */
    offeringId: string;
    version: GETGETHostReservationPurchasePreviewVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETHostReservationPurchasePreviewResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
