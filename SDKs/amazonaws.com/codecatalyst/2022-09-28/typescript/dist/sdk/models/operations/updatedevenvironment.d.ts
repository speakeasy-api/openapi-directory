import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>The Amazon EC2 instace type to use for the Dev Environment. </p> <note> <p>Changing this value will cause a restart of the Dev Environment if it is running.</p> </note>
 */
export declare enum UpdateDevEnvironmentRequestBodyInstanceTypeEnum {
    DevStandard1Small = "dev.standard1.small",
    DevStandard1Medium = "dev.standard1.medium",
    DevStandard1Large = "dev.standard1.large",
    DevStandard1Xlarge = "dev.standard1.xlarge"
}
export declare class UpdateDevEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * The user-specified alias for the Dev Environment. Changing this value will not cause a restart.
     */
    alias?: string;
    /**
     * A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.
     */
    clientToken?: string;
    /**
     * Information about the integrated development environment (IDE) configured for a Dev Environment.
     */
    ides?: shared.IdeConfiguration[];
    /**
     * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.</p> <note> <p>Changing this value will cause a restart of the Dev Environment if it is running.</p> </note>
     */
    inactivityTimeoutMinutes?: number;
    /**
     * <p>The Amazon EC2 instace type to use for the Dev Environment. </p> <note> <p>Changing this value will cause a restart of the Dev Environment if it is running.</p> </note>
     */
    instanceType?: UpdateDevEnvironmentRequestBodyInstanceTypeEnum;
}
export declare class UpdateDevEnvironmentRequest extends SpeakeasyBase {
    requestBody: UpdateDevEnvironmentRequestBody;
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
export declare class UpdateDevEnvironmentResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateDevEnvironmentResponse?: shared.UpdateDevEnvironmentResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
