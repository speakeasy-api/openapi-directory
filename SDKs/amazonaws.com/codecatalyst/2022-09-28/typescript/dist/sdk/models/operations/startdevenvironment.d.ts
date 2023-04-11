import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Amazon EC2 instace type to use for the Dev Environment.
 */
export declare enum StartDevEnvironmentRequestBodyInstanceTypeEnum {
    DevStandard1Small = "dev.standard1.small",
    DevStandard1Medium = "dev.standard1.medium",
    DevStandard1Large = "dev.standard1.large",
    DevStandard1Xlarge = "dev.standard1.xlarge"
}
export declare class StartDevEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * Information about the integrated development environment (IDE) configured for a Dev Environment.
     */
    ides?: shared.IdeConfiguration[];
    /**
     * The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.
     */
    inactivityTimeoutMinutes?: number;
    /**
     * The Amazon EC2 instace type to use for the Dev Environment.
     */
    instanceType?: StartDevEnvironmentRequestBodyInstanceTypeEnum;
}
export declare class StartDevEnvironmentRequest extends SpeakeasyBase {
    requestBody: StartDevEnvironmentRequestBody;
    /**
     * The system-generated unique ID of the Dev Environment.
     */
    id: string;
    /**
     * The name of the project in the space.
     */
    projectName: string;
    /**
     * The name of the space.
     */
    spaceName: string;
}
export declare class StartDevEnvironmentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startDevEnvironmentResponse?: shared.StartDevEnvironmentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
