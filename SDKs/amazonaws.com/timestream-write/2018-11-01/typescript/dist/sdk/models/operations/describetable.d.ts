import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTableXAmzTargetEnum {
    Timestream20181101DescribeTable = "Timestream_20181101.DescribeTable"
}
export declare class DescribeTableRequest extends SpeakeasyBase {
    describeTableRequest: shared.DescribeTableRequest;
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
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeTableResponse?: shared.DescribeTableResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidEndpointException
     */
    invalidEndpointException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
