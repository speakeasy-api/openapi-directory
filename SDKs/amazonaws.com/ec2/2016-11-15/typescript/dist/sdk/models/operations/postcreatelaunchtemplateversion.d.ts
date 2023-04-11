import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateLaunchTemplateVersionActionEnum {
    CreateLaunchTemplateVersion = "CreateLaunchTemplateVersion"
}
export declare enum POSTCreateLaunchTemplateVersionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateLaunchTemplateVersionRequest extends SpeakeasyBase {
    action: POSTCreateLaunchTemplateVersionActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateLaunchTemplateVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateLaunchTemplateVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
