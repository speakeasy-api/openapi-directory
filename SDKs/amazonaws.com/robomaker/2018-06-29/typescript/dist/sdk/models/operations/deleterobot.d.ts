import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRobotRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the robot.
     */
    robot: string;
}
export declare class DeleteRobotRequest extends SpeakeasyBase {
    requestBody: DeleteRobotRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRobotResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRobotResponse?: Record<string, any>;
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
     * ThrottlingException
     */
    throttlingException?: any;
}
