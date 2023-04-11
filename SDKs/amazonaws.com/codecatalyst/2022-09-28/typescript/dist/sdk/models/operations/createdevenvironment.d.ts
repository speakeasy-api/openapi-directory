import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Amazon EC2 instace type to use for the Dev Environment.
 */
export declare enum CreateDevEnvironmentRequestBodyInstanceTypeEnum {
    DevStandard1Small = "dev.standard1.small",
    DevStandard1Medium = "dev.standard1.medium",
    DevStandard1Large = "dev.standard1.large",
    DevStandard1Xlarge = "dev.standard1.xlarge"
}
/**
 * Information about the configuration of persistent storage for a Dev Environment.
 */
export declare class CreateDevEnvironmentRequestBodyPersistentStorage extends SpeakeasyBase {
    sizeInGiB?: number;
}
export declare class CreateDevEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * The user-defined alias for a Dev Environment.
     */
    alias?: string;
    /**
     * A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.
     */
    clientToken?: string;
    /**
     * <p>Information about the integrated development environment (IDE) configured for a Dev Environment.</p> <note> <p>An IDE is required to create a Dev Environment. For Dev Environment creation, this field contains configuration information and must be provided.</p> </note>
     */
    ides?: shared.IdeConfiguration[];
    /**
     * The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.
     */
    inactivityTimeoutMinutes?: number;
    /**
     * The Amazon EC2 instace type to use for the Dev Environment.
     */
    instanceType: CreateDevEnvironmentRequestBodyInstanceTypeEnum;
    /**
     * Information about the configuration of persistent storage for a Dev Environment.
     */
    persistentStorage: CreateDevEnvironmentRequestBodyPersistentStorage;
    /**
     * The source repository that contains the branch to clone into the Dev Environment.
     */
    repositories?: shared.RepositoryInput[];
}
export declare class CreateDevEnvironmentRequest extends SpeakeasyBase {
    requestBody: CreateDevEnvironmentRequestBody;
    /**
     * The name of the project in the space.
     */
    projectName: string;
    /**
     * The name of the space.
     */
    spaceName: string;
}
export declare class CreateDevEnvironmentResponse extends SpeakeasyBase {
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
     * Success
     */
    createDevEnvironmentResponse?: shared.CreateDevEnvironmentResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
