import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStateEnum } from "./applicationstateenum";
import { ArchitectureEnum } from "./architectureenum";
/**
 * The summary of attributes associated with an application.
 */
export declare class ApplicationSummary extends SpeakeasyBase {
    architecture?: ArchitectureEnum;
    arn: string;
    createdAt: Date;
    id: string;
    name?: string;
    releaseLabel: string;
    state: ApplicationStateEnum;
    stateDetails?: string;
    type: string;
    updatedAt: Date;
}
