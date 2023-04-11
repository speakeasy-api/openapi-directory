import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteHsmConfigurationActionEnum {
    DeleteHsmConfiguration = "DeleteHsmConfiguration"
}
export declare enum POSTDeleteHsmConfigurationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTDeleteHsmConfigurationRequest extends SpeakeasyBase {
    action: POSTDeleteHsmConfigurationActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteHsmConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteHsmConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
