import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCancelCapacityReservationActionEnum {
    CancelCapacityReservation = "CancelCapacityReservation"
}
export declare enum POSTCancelCapacityReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCancelCapacityReservationRequest extends SpeakeasyBase {
    action: POSTCancelCapacityReservationActionEnum;
    requestBody?: Uint8Array;
    version: POSTCancelCapacityReservationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCancelCapacityReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
