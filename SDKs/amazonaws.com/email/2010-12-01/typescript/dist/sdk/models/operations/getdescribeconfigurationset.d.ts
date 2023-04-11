import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETDescribeConfigurationSetActionEnum {
    DescribeConfigurationSet = "DescribeConfigurationSet"
}
export declare enum GETDescribeConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDescribeConfigurationSetRequest extends SpeakeasyBase {
    action: GETDescribeConfigurationSetActionEnum;
    /**
     * A list of configuration set attributes to return.
     */
    configurationSetAttributeNames?: shared.ConfigurationSetAttributeEnum[];
    /**
     * The name of the configuration set to describe.
     */
    configurationSetName: string;
    version: GETDescribeConfigurationSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeConfigurationSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
