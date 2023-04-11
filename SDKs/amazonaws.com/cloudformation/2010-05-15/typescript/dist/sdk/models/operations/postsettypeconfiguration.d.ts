import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetTypeConfigurationActionEnum {
    SetTypeConfiguration = "SetTypeConfiguration"
}
export declare enum POSTSetTypeConfigurationVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTSetTypeConfigurationRequest extends SpeakeasyBase {
    action: POSTSetTypeConfigurationActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetTypeConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetTypeConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
