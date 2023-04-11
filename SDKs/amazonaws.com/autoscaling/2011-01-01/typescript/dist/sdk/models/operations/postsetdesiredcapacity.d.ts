import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetDesiredCapacityActionEnum {
    SetDesiredCapacity = "SetDesiredCapacity"
}
export declare enum POSTSetDesiredCapacityVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTSetDesiredCapacityRequest extends SpeakeasyBase {
    action: POSTSetDesiredCapacityActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetDesiredCapacityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetDesiredCapacityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
