import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeExportXAmzTargetEnum {
    DynamoDB20120810DescribeExport = "DynamoDB_20120810.DescribeExport"
}
export declare class DescribeExportRequest extends SpeakeasyBase {
    describeExportInput: shared.DescribeExportInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExportXAmzTargetEnum;
}
export declare class DescribeExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeExportOutput?: shared.DescribeExportOutput;
    /**
     * ExportNotFoundException
     */
    exportNotFoundException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
