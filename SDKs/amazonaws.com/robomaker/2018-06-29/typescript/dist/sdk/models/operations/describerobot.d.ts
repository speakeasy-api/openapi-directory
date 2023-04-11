import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeRobotRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the robot to be described.
     */
    robot: string;
}
export declare class DescribeRobotRequest extends SpeakeasyBase {
    requestBody: DescribeRobotRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeRobotResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRobotResponse?: shared.DescribeRobotResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
}
