import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateLaunchConfigurationActionEnum {
    CreateLaunchConfiguration = "CreateLaunchConfiguration"
}
export declare enum POSTCreateLaunchConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTCreateLaunchConfigurationRequest extends SpeakeasyBase {
    action: POSTCreateLaunchConfigurationActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateLaunchConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateLaunchConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
