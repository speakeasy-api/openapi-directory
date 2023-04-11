import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVerifiedAccessInstanceLoggingConfigurationActionEnum {
    ModifyVerifiedAccessInstanceLoggingConfiguration = "ModifyVerifiedAccessInstanceLoggingConfiguration"
}
export declare enum POSTModifyVerifiedAccessInstanceLoggingConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVerifiedAccessInstanceLoggingConfigurationRequest extends SpeakeasyBase {
    action: POSTModifyVerifiedAccessInstanceLoggingConfigurationActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVerifiedAccessInstanceLoggingConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVerifiedAccessInstanceLoggingConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
