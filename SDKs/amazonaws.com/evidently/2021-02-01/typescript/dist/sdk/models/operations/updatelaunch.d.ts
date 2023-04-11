import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An array of structures that define the traffic allocation percentages among the feature variations during each step of a launch. This also defines the start time of each step.
 */
export declare class UpdateLaunchRequestBodyScheduledSplitsConfig extends SpeakeasyBase {
    steps?: shared.ScheduledSplitConfig[];
}
export declare class UpdateLaunchRequestBody extends SpeakeasyBase {
    /**
     * An optional description for the launch.
     */
    description?: string;
    /**
     * An array of structures that contains the feature and variations that are to be used for the launch.
     */
    groups?: shared.LaunchGroupConfig[];
    /**
     * An array of structures that define the metrics that will be used to monitor the launch performance.
     */
    metricMonitors?: shared.MetricMonitorConfig[];
    /**
     * When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses the launch name as the <code>randomizationSalt</code>.
     */
    randomizationSalt?: string;
    /**
     * An array of structures that define the traffic allocation percentages among the feature variations during each step of a launch. This also defines the start time of each step.
     */
    scheduledSplitsConfig?: UpdateLaunchRequestBodyScheduledSplitsConfig;
}
export declare class UpdateLaunchRequest extends SpeakeasyBase {
    requestBody: UpdateLaunchRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the launch that is to be updated.
     */
    launch: string;
    /**
     * The name or ARN of the project that contains the launch that you want to update.
     */
    project: string;
}
export declare class UpdateLaunchResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateLaunchResponse?: shared.UpdateLaunchResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
