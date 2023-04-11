import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of label. Read-only labels are applied automatically when the runner is configured.
 */
export declare enum RunnerLabelTypeEnum {
    ReadOnly = "read-only",
    Custom = "custom"
}
/**
 * A label for a self hosted runner
 */
export declare class RunnerLabel extends SpeakeasyBase {
    /**
     * Unique identifier of the label.
     */
    id?: number;
    /**
     * Name of the label.
     */
    name: string;
    /**
     * The type of label. Read-only labels are applied automatically when the runner is configured.
     */
    type?: RunnerLabelTypeEnum;
}
