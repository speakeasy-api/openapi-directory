import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeregisterRobotRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleet: string;
    /**
     * The Amazon Resource Name (ARN) of the robot.
     */
    robot: string;
}
export declare class DeregisterRobotRequest extends SpeakeasyBase {
    requestBody: DeregisterRobotRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeregisterRobotResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deregisterRobotResponse?: shared.DeregisterRobotResponse;
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
