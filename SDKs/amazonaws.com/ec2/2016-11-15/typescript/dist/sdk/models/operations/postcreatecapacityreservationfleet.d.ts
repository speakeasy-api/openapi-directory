import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateCapacityReservationFleetActionEnum {
    CreateCapacityReservationFleet = "CreateCapacityReservationFleet"
}
export declare enum POSTCreateCapacityReservationFleetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateCapacityReservationFleetRequest extends SpeakeasyBase {
    action: POSTCreateCapacityReservationFleetActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateCapacityReservationFleetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateCapacityReservationFleetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
