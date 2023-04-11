import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStatementXAmzTargetEnum {
    RedshiftDataDescribeStatement = "RedshiftData.DescribeStatement"
}
export declare class DescribeStatementRequest extends SpeakeasyBase {
    describeStatementRequest: shared.DescribeStatementRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStatementXAmzTargetEnum;
}
export declare class DescribeStatementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeStatementResponse?: shared.DescribeStatementResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
