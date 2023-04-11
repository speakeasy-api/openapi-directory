import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRequestSpotFleetActionEnum {
    RequestSpotFleet = "RequestSpotFleet"
}
export declare enum POSTRequestSpotFleetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTRequestSpotFleetRequest extends SpeakeasyBase {
    action: POSTRequestSpotFleetActionEnum;
    requestBody?: Uint8Array;
    version: POSTRequestSpotFleetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRequestSpotFleetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
