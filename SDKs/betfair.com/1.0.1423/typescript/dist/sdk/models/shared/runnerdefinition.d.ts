import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RunnerDefinitionStatusEnum {
    Active = "ACTIVE",
    Winner = "WINNER",
    Loser = "LOSER",
    Removed = "REMOVED",
    RemovedVacant = "REMOVED_VACANT",
    Hidden = "HIDDEN",
    Placed = "PLACED"
}
export declare class RunnerDefinition extends SpeakeasyBase {
    adjustmentFactor?: number;
    bsp?: number;
    /**
     * Handicap - the handicap of the runner (selection) (null if not applicable)
     */
    hc?: number;
    /**
     * Selection Id - the id of the runner (selection)
     */
    id?: number;
    removalDate?: Date;
    sortPriority?: number;
    status?: RunnerDefinitionStatusEnum;
}
