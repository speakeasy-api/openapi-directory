import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The object that contains the Docker image URI for either your robot or simulation applications.
 */
export declare class UpdateRobotApplicationRequestBodyEnvironment extends SpeakeasyBase {
    uri?: string;
}
/**
 * Information about a robot software suite (ROS distribution).
 */
export declare class UpdateRobotApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
    name?: shared.RobotSoftwareSuiteTypeEnum;
    version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}
export declare class UpdateRobotApplicationRequestBody extends SpeakeasyBase {
    /**
     * The application information for the robot application.
     */
    application: string;
    /**
     * The revision id for the robot application.
     */
    currentRevisionId?: string;
    /**
     * The object that contains the Docker image URI for either your robot or simulation applications.
     */
    environment?: UpdateRobotApplicationRequestBodyEnvironment;
    /**
     * Information about a robot software suite (ROS distribution).
     */
    robotSoftwareSuite: UpdateRobotApplicationRequestBodyRobotSoftwareSuite;
    /**
     * The sources of the robot application.
     */
    sources?: shared.SourceConfig[];
}
export declare class UpdateRobotApplicationRequest extends SpeakeasyBase {
    requestBody: UpdateRobotApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateRobotApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
     * Success
     */
    updateRobotApplicationResponse?: shared.UpdateRobotApplicationResponse;
}
