import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The target architecture of the robot.
 */
export declare enum CreateRobotRequestBodyArchitectureEnum {
    X8664 = "X86_64",
    Arm64 = "ARM64",
    Armhf = "ARMHF"
}
export declare class CreateRobotRequestBody extends SpeakeasyBase {
    /**
     * The target architecture of the robot.
     */
    architecture: CreateRobotRequestBodyArchitectureEnum;
    /**
     * The Greengrass group id.
     */
    greengrassGroupId: string;
    /**
     * The name for the robot.
     */
    name: string;
    /**
     * A map that contains tag keys and tag values that are attached to the robot.
     */
    tags?: Record<string, string>;
}
export declare class CreateRobotRequest extends SpeakeasyBase {
    requestBody: CreateRobotRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRobotResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRobotResponse?: shared.CreateRobotResponse;
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
