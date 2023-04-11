import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The object that contains the Docker image URI for either your robot or simulation applications.
 */
export declare class CreateSimulationApplicationRequestBodyEnvironment extends SpeakeasyBase {
    uri?: string;
}
/**
 * Information about a rendering engine.
 */
export declare class CreateSimulationApplicationRequestBodyRenderingEngine extends SpeakeasyBase {
    name?: shared.RenderingEngineTypeEnum;
    version?: string;
}
/**
 * Information about a robot software suite (ROS distribution).
 */
export declare class CreateSimulationApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
    name?: shared.RobotSoftwareSuiteTypeEnum;
    version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}
/**
 * Information about a simulation software suite.
 */
export declare class CreateSimulationApplicationRequestBodySimulationSoftwareSuite extends SpeakeasyBase {
    name?: shared.SimulationSoftwareSuiteTypeEnum;
    version?: string;
}
export declare class CreateSimulationApplicationRequestBody extends SpeakeasyBase {
    /**
     * The object that contains the Docker image URI for either your robot or simulation applications.
     */
    environment?: CreateSimulationApplicationRequestBodyEnvironment;
    /**
     * The name of the simulation application.
     */
    name: string;
    /**
     * Information about a rendering engine.
     */
    renderingEngine?: CreateSimulationApplicationRequestBodyRenderingEngine;
    /**
     * Information about a robot software suite (ROS distribution).
     */
    robotSoftwareSuite: CreateSimulationApplicationRequestBodyRobotSoftwareSuite;
    /**
     * Information about a simulation software suite.
     */
    simulationSoftwareSuite: CreateSimulationApplicationRequestBodySimulationSoftwareSuite;
    /**
     * The sources of the simulation application.
     */
    sources?: shared.SourceConfig[];
    /**
     * A map that contains tag keys and tag values that are attached to the simulation application.
     */
    tags?: Record<string, string>;
}
export declare class CreateSimulationApplicationRequest extends SpeakeasyBase {
    requestBody: CreateSimulationApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSimulationApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSimulationApplicationResponse?: shared.CreateSimulationApplicationResponse;
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
