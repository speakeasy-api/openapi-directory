import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An array of structures that define the traffic allocation percentages among the feature variations during each step of a launch. This also defines the start time of each step.
 */
export declare class CreateLaunchRequestBodyScheduledSplitsConfig extends SpeakeasyBase {
    steps?: shared.ScheduledSplitConfig[];
}
export declare class CreateLaunchRequestBody extends SpeakeasyBase {
    /**
     * An optional description for the launch.
     */
    description?: string;
    /**
     * An array of structures that contains the feature and variations that are to be used for the launch.
     */
    groups: shared.LaunchGroupConfig[];
    /**
     * An array of structures that define the metrics that will be used to monitor the launch performance.
     */
    metricMonitors?: shared.MetricMonitorConfig[];
    /**
     * The name for the new launch.
     */
    name: string;
    /**
     * When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses the launch name as the <code>randomizationSalt</code>.
     */
    randomizationSalt?: string;
    /**
     * An array of structures that define the traffic allocation percentages among the feature variations during each step of a launch. This also defines the start time of each step.
     */
    scheduledSplitsConfig?: CreateLaunchRequestBodyScheduledSplitsConfig;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the launch.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with a launch.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
     */
    tags?: Record<string, string>;
}
export declare class CreateLaunchRequest extends SpeakeasyBase {
    requestBody: CreateLaunchRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name or ARN of the project that you want to create the launch in.
     */
    project: string;
}
export declare class CreateLaunchResponse extends SpeakeasyBase {
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
    createLaunchResponse?: shared.CreateLaunchResponse;
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
     * ValidationException
     */
    validationException?: any;
}
