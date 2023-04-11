import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateSubnetCidrReservationActionEnum {
    CreateSubnetCidrReservation = "CreateSubnetCidrReservation"
}
export declare enum POSTCreateSubnetCidrReservationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateSubnetCidrReservationRequest extends SpeakeasyBase {
    action: POSTCreateSubnetCidrReservationActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateSubnetCidrReservationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateSubnetCidrReservationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
