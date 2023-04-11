import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The object that contains the Docker image URI for either your robot or simulation applications.
 */
export declare class CreateRobotApplicationRequestBodyEnvironment extends SpeakeasyBase {
    uri?: string;
}
/**
 * Information about a robot software suite (ROS distribution).
 */
export declare class CreateRobotApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
    name?: shared.RobotSoftwareSuiteTypeEnum;
    version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}
export declare class CreateRobotApplicationRequestBody extends SpeakeasyBase {
    /**
     * The object that contains the Docker image URI for either your robot or simulation applications.
     */
    environment?: CreateRobotApplicationRequestBodyEnvironment;
    /**
     * The name of the robot application.
     */
    name: string;
    /**
     * Information about a robot software suite (ROS distribution).
     */
    robotSoftwareSuite: CreateRobotApplicationRequestBodyRobotSoftwareSuite;
    /**
     * The sources of the robot application.
     */
    sources?: shared.SourceConfig[];
    /**
     * A map that contains tag keys and tag values that are attached to the robot application.
     */
    tags?: Record<string, string>;
}
export declare class CreateRobotApplicationRequest extends SpeakeasyBase {
    requestBody: CreateRobotApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRobotApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRobotApplicationResponse?: shared.CreateRobotApplicationResponse;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
