import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyCapacityReservationFleetActionEnum {
    ModifyCapacityReservationFleet = "ModifyCapacityReservationFleet"
}
export declare enum POSTModifyCapacityReservationFleetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyCapacityReservationFleetRequest extends SpeakeasyBase {
    action: POSTModifyCapacityReservationFleetActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyCapacityReservationFleetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyCapacityReservationFleetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
