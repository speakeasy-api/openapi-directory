import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCancelCapacityReservationFleetsActionEnum {
    CancelCapacityReservationFleets = "CancelCapacityReservationFleets"
}
export declare enum POSTCancelCapacityReservationFleetsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCancelCapacityReservationFleetsRequest extends SpeakeasyBase {
    action: POSTCancelCapacityReservationFleetsActionEnum;
    requestBody?: Uint8Array;
    version: POSTCancelCapacityReservationFleetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCancelCapacityReservationFleetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
