import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeRobotApplicationRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the robot application.
     */
    application: string;
    /**
     * The version of the robot application to describe.
     */
    applicationVersion?: string;
}
export declare class DescribeRobotApplicationRequest extends SpeakeasyBase {
    requestBody: DescribeRobotApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeRobotApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRobotApplicationResponse?: shared.DescribeRobotApplicationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
