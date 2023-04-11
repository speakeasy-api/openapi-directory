import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeExportTasksActionEnum {
    DescribeExportTasks = "DescribeExportTasks"
}
export declare enum POSTDescribeExportTasksVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeExportTasksRequest extends SpeakeasyBase {
    action: POSTDescribeExportTasksActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeExportTasksVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeExportTasksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
