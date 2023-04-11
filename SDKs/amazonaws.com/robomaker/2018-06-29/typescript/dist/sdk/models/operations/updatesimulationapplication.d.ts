import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The object that contains the Docker image URI for either your robot or simulation applications.
 */
export declare class UpdateSimulationApplicationRequestBodyEnvironment extends SpeakeasyBase {
    uri?: string;
}
/**
 * Information about a rendering engine.
 */
export declare class UpdateSimulationApplicationRequestBodyRenderingEngine extends SpeakeasyBase {
    name?: shared.RenderingEngineTypeEnum;
    version?: string;
}
/**
 * Information about a robot software suite (ROS distribution).
 */
export declare class UpdateSimulationApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
    name?: shared.RobotSoftwareSuiteTypeEnum;
    version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}
/**
 * Information about a simulation software suite.
 */
export declare class UpdateSimulationApplicationRequestBodySimulationSoftwareSuite extends SpeakeasyBase {
    name?: shared.SimulationSoftwareSuiteTypeEnum;
    version?: string;
}
export declare class UpdateSimulationApplicationRequestBody extends SpeakeasyBase {
    /**
     * The application information for the simulation application.
     */
    application: string;
    /**
     * The revision id for the robot application.
     */
    currentRevisionId?: string;
    /**
     * The object that contains the Docker image URI for either your robot or simulation applications.
     */
    environment?: UpdateSimulationApplicationRequestBodyEnvironment;
    /**
     * Information about a rendering engine.
     */
    renderingEngine?: UpdateSimulationApplicationRequestBodyRenderingEngine;
    /**
     * Information about a robot software suite (ROS distribution).
     */
    robotSoftwareSuite: UpdateSimulationApplicationRequestBodyRobotSoftwareSuite;
    /**
     * Information about a simulation software suite.
     */
    simulationSoftwareSuite: UpdateSimulationApplicationRequestBodySimulationSoftwareSuite;
    /**
     * The sources of the simulation application.
     */
    sources?: shared.SourceConfig[];
}
export declare class UpdateSimulationApplicationRequest extends SpeakeasyBase {
    requestBody: UpdateSimulationApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSimulationApplicationResponse extends SpeakeasyBase {
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
    updateSimulationApplicationResponse?: shared.UpdateSimulationApplicationResponse;
}
