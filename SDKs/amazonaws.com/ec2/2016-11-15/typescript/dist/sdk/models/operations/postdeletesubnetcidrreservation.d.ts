import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteSubnetCidrReservationActionEnum {
    DeleteSubnetCidrReservation = "DeleteSubnetCidrReservation"
}
export declare enum POSTDeleteSubnetCidrReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteSubnetCidrReservationRequest extends SpeakeasyBase {
    action: POSTDeleteSubnetCidrReservationActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteSubnetCidrReservationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteSubnetCidrReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
