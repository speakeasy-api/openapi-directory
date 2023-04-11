import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteEnvironmentConfigurationActionEnum {
    DeleteEnvironmentConfiguration = "DeleteEnvironmentConfiguration"
}
export declare enum POSTDeleteEnvironmentConfigurationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDeleteEnvironmentConfigurationRequest extends SpeakeasyBase {
    action: POSTDeleteEnvironmentConfigurationActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteEnvironmentConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteEnvironmentConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
