import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTableXAmzTargetEnum {
    DynamoDB20111205DescribeTable = "DynamoDB_20111205.DescribeTable"
}
export declare class DescribeTableRequest extends SpeakeasyBase {
    describeTableInput: shared.DescribeTableInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTableXAmzTargetEnum;
}
export declare class DescribeTableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTableOutput?: shared.DescribeTableOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
