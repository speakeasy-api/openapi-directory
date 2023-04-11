import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifySpotFleetRequestActionEnum {
    ModifySpotFleetRequest = "ModifySpotFleetRequest"
}
export declare enum POSTModifySpotFleetRequestVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifySpotFleetRequestRequest extends SpeakeasyBase {
    action: POSTModifySpotFleetRequestActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifySpotFleetRequestVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifySpotFleetRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
