import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableVolumeIOActionEnum {
    EnableVolumeIO = "EnableVolumeIO"
}
export declare enum POSTEnableVolumeIOVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTEnableVolumeIORequest extends SpeakeasyBase {
    action: POSTEnableVolumeIOActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableVolumeIOVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableVolumeIOResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
