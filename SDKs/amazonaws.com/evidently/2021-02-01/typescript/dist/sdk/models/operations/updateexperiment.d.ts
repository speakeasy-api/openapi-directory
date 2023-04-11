import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation.
 */
export declare class UpdateExperimentRequestBodyOnlineAbConfig extends SpeakeasyBase {
    controlTreatmentName?: string;
    treatmentWeights?: Record<string, number>;
}
export declare class UpdateExperimentRequestBody extends SpeakeasyBase {
    /**
     * An optional description of the experiment.
     */
    description?: string;
    /**
     * An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal.
     */
    metricGoals?: shared.MetricGoalConfig[];
    /**
     * A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation.
     */
    onlineAbConfig?: UpdateExperimentRequestBodyOnlineAbConfig;
    /**
     * When Evidently assigns a particular user session to an experiment, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses the experiment name as the <code>randomizationSalt</code>.
     */
    randomizationSalt?: string;
    /**
     * Removes a segment from being used in an experiment. You can't use this parameter if the experiment is currently running.
     */
    removeSegment?: boolean;
    /**
     * <p>The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience is the total audience minus the audience that you have allocated to overrides or current launches of this feature.</p> <p>This is represented in thousandths of a percent. For example, specify 20,000 to allocate 20% of the available audience.</p>
     */
    samplingRate?: number;
    /**
     * Adds an audience <i>segment</i> to an experiment. When a segment is used in an experiment, only user sessions that match the segment pattern are used in the experiment. You can't use this parameter if the experiment is currently running.
     */
    segment?: string;
    /**
     * An array of structures that define the variations being tested in the experiment.
     */
    treatments?: shared.TreatmentConfig[];
}
export declare class UpdateExperimentRequest extends SpeakeasyBase {
    requestBody: UpdateExperimentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the experiment to update.
     */
    experiment: string;
    /**
     * The name or ARN of the project that contains the experiment that you want to update.
     */
    project: string;
}
export declare class UpdateExperimentResponse extends SpeakeasyBase {
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
    updateExperimentResponse?: shared.UpdateExperimentResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
