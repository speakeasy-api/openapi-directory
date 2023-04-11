import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeImportXAmzTargetEnum {
    DynamoDB20120810DescribeImport = "DynamoDB_20120810.DescribeImport"
}
export declare class DescribeImportRequest extends SpeakeasyBase {
    describeImportInput: shared.DescribeImportInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImportXAmzTargetEnum;
}
export declare class DescribeImportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeImportOutput?: shared.DescribeImportOutput;
    /**
     * ImportNotFoundException
     */
    importNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
