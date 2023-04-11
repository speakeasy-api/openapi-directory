import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * Indicates whether to update the runtime environment during the maintenance window. The default is false. Currently, Amazon Web Services Mainframe Modernization accepts the <code>engineVersion</code> parameter only if <code>applyDuringMaintenanceWindow</code> is true. If any parameter other than <code>engineVersion</code> is provided in <code>UpdateEnvironmentRequest</code>, it will fail if <code>applyDuringMaintenanceWindow</code> is set to true.
     */
    applyDuringMaintenanceWindow?: boolean;
    /**
     * The desired capacity for the runtime environment to update.
     */
    desiredCapacity?: number;
    /**
     * The version of the runtime engine for the runtime environment.
     */
    engineVersion?: string;
    /**
     * The instance type for the runtime environment to update.
     */
    instanceType?: string;
    /**
     * Configures the maintenance window you want for the runtime environment. If you do not provide a value, a random system-generated value will be assigned.
     */
    preferredMaintenanceWindow?: string;
}
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    requestBody: UpdateEnvironmentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the runtime environment that you want to update.
     */
    environmentId: string;
}
export declare class UpdateEnvironmentResponse extends SpeakeasyBase {
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
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
    updateEnvironmentResponse?: shared.UpdateEnvironmentResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
