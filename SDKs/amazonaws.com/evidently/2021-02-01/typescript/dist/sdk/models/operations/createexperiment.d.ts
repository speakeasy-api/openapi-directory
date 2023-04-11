import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation.
 */
export declare class CreateExperimentRequestBodyOnlineAbConfig extends SpeakeasyBase {
    controlTreatmentName?: string;
    treatmentWeights?: Record<string, number>;
}
export declare class CreateExperimentRequestBody extends SpeakeasyBase {
    /**
     * An optional description of the experiment.
     */
    description?: string;
    /**
     * An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal.
     */
    metricGoals: shared.MetricGoalConfig[];
    /**
     * A name for the new experiment.
     */
    name: string;
    /**
     * A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation.
     */
    onlineAbConfig?: CreateExperimentRequestBodyOnlineAbConfig;
    /**
     * When Evidently assigns a particular user session to an experiment, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses the experiment name as the <code>randomizationSalt</code>.
     */
    randomizationSalt?: string;
    /**
     * <p>The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience is the total audience minus the audience that you have allocated to overrides or current launches of this feature.</p> <p>This is represented in thousandths of a percent. For example, specify 10,000 to allocate 10% of the available audience.</p>
     */
    samplingRate?: number;
    /**
     * Specifies an audience <i>segment</i> to use in the experiment. When a segment is used in an experiment, only user sessions that match the segment pattern are used in the experiment.
     */
    segment?: string;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the experiment.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with an experiment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
     */
    tags?: Record<string, string>;
    /**
     * An array of structures that describe the configuration of each feature variation used in the experiment.
     */
    treatments: shared.TreatmentConfig[];
}
export declare class CreateExperimentRequest extends SpeakeasyBase {
    requestBody: CreateExperimentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name or ARN of the project that you want to create the new experiment in.
     */
    project: string;
}
export declare class CreateExperimentResponse extends SpeakeasyBase {
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
    createExperimentResponse?: shared.CreateExperimentResponse;
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
