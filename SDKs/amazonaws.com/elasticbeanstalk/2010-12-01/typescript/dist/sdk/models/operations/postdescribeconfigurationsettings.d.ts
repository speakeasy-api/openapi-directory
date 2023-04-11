import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeConfigurationSettingsActionEnum {
    DescribeConfigurationSettings = "DescribeConfigurationSettings"
}
export declare enum POSTDescribeConfigurationSettingsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDescribeConfigurationSettingsRequest extends SpeakeasyBase {
    action: POSTDescribeConfigurationSettingsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeConfigurationSettingsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeConfigurationSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
