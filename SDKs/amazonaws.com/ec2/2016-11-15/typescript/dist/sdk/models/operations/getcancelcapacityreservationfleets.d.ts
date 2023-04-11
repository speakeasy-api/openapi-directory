import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCancelCapacityReservationFleetsActionEnum {
    CancelCapacityReservationFleets = "CancelCapacityReservationFleets"
}
export declare enum GETCancelCapacityReservationFleetsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCancelCapacityReservationFleetsRequest extends SpeakeasyBase {
    action: GETCancelCapacityReservationFleetsActionEnum;
    /**
     * The IDs of the Capacity Reservation Fleets to cancel.
     */
    capacityReservationFleetId: string[];
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETCancelCapacityReservationFleetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCancelCapacityReservationFleetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
