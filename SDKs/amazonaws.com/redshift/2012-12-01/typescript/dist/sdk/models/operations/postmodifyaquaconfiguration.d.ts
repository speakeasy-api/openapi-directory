import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyAquaConfigurationActionEnum {
    ModifyAquaConfiguration = "ModifyAquaConfiguration"
}
export declare enum POSTModifyAquaConfigurationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTModifyAquaConfigurationRequest extends SpeakeasyBase {
    action: POSTModifyAquaConfigurationActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyAquaConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyAquaConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
