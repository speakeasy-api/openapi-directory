import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetLaunchTemplateDataActionEnum {
    GetLaunchTemplateData = "GetLaunchTemplateData"
}
export declare enum POSTGetLaunchTemplateDataVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetLaunchTemplateDataRequest extends SpeakeasyBase {
    action: POSTGetLaunchTemplateDataActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetLaunchTemplateDataVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetLaunchTemplateDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
