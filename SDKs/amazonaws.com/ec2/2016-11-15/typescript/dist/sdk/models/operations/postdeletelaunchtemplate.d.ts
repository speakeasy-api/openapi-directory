import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteLaunchTemplateActionEnum {
    DeleteLaunchTemplate = "DeleteLaunchTemplate"
}
export declare enum POSTDeleteLaunchTemplateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteLaunchTemplateRequest extends SpeakeasyBase {
    action: POSTDeleteLaunchTemplateActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteLaunchTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteLaunchTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
