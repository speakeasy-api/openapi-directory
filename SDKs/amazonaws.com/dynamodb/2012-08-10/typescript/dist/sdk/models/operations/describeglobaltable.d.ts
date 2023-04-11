import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeGlobalTableXAmzTargetEnum {
    DynamoDB20120810DescribeGlobalTable = "DynamoDB_20120810.DescribeGlobalTable"
}
export declare class DescribeGlobalTableRequest extends SpeakeasyBase {
    describeGlobalTableInput: shared.DescribeGlobalTableInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGlobalTableXAmzTargetEnum;
}
export declare class DescribeGlobalTableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeGlobalTableOutput?: shared.DescribeGlobalTableOutput;
    /**
     * GlobalTableNotFoundException
     */
    globalTableNotFoundException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
