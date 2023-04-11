import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyInstanceCapacityReservationAttributesActionEnum {
    ModifyInstanceCapacityReservationAttributes = "ModifyInstanceCapacityReservationAttributes"
}
export declare enum POSTModifyInstanceCapacityReservationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyInstanceCapacityReservationAttributesRequest extends SpeakeasyBase {
    action: POSTModifyInstanceCapacityReservationAttributesActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyInstanceCapacityReservationAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyInstanceCapacityReservationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
