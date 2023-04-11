import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetSubnetCidrReservationsActionEnum {
    GetSubnetCidrReservations = "GetSubnetCidrReservations"
}
export declare enum POSTGetSubnetCidrReservationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetSubnetCidrReservationsRequest extends SpeakeasyBase {
    action: POSTGetSubnetCidrReservationsActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetSubnetCidrReservationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetSubnetCidrReservationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
