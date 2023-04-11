import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCommandsXAmzTargetEnum {
    OpsWorks20130218DescribeCommands = "OpsWorks_20130218.DescribeCommands"
}
export declare class DescribeCommandsRequest extends SpeakeasyBase {
    describeCommandsRequest: shared.DescribeCommandsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCommandsXAmzTargetEnum;
}
export declare class DescribeCommandsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCommandsResult?: shared.DescribeCommandsResult;
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
