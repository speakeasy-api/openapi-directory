import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLCandidateStep } from "./automlcandidatestep";
import { AutoMLContainerDefinition } from "./automlcontainerdefinition";
import { CandidateProperties } from "./candidateproperties";
import { CandidateStatusEnum } from "./candidatestatusenum";
import { FinalAutoMLJobObjectiveMetric } from "./finalautomljobobjectivemetric";
import { ObjectiveStatusEnum } from "./objectivestatusenum";
/**
 * Information about a candidate produced by an AutoML training job, including its status, steps, and other properties.
 */
export declare class AutoMLCandidate extends SpeakeasyBase {
    candidateName: string;
    candidateProperties?: CandidateProperties;
    candidateStatus: CandidateStatusEnum;
    candidateSteps: AutoMLCandidateStep[];
    creationTime: Date;
    endTime?: Date;
    failureReason?: string;
    /**
     * The best candidate result from an AutoML training job.
     */
    finalAutoMLJobObjectiveMetric?: FinalAutoMLJobObjectiveMetric;
    inferenceContainerDefinitions?: Record<string, AutoMLContainerDefinition[]>;
    inferenceContainers?: AutoMLContainerDefinition[];
    lastModifiedTime: Date;
    objectiveStatus: ObjectiveStatusEnum;
}
