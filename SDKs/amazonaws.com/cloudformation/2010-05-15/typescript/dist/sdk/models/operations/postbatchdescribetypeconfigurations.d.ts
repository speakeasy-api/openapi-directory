import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTBatchDescribeTypeConfigurationsActionEnum {
    BatchDescribeTypeConfigurations = "BatchDescribeTypeConfigurations"
}
export declare enum POSTBatchDescribeTypeConfigurationsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTBatchDescribeTypeConfigurationsRequest extends SpeakeasyBase {
    action: POSTBatchDescribeTypeConfigurationsActionEnum;
    requestBody?: Uint8Array;
    version: POSTBatchDescribeTypeConfigurationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTBatchDescribeTypeConfigurationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
