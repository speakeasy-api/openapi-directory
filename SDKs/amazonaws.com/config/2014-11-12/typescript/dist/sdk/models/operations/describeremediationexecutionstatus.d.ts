import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRemediationExecutionStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeRemediationExecutionStatus = "StarlingDoveService.DescribeRemediationExecutionStatus"
}
export declare class DescribeRemediationExecutionStatusRequest extends SpeakeasyBase {
    describeRemediationExecutionStatusRequest: shared.DescribeRemediationExecutionStatusRequest;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRemediationExecutionStatusXAmzTargetEnum;
}
export declare class DescribeRemediationExecutionStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRemediationExecutionStatusResponse?: shared.DescribeRemediationExecutionStatusResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * NoSuchRemediationConfigurationException
     */
    noSuchRemediationConfigurationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
