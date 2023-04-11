import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
export declare class PipelineStagesInput extends SpeakeasyBase {
    displayOrder?: number;
    name?: string;
    value?: string;
    /**
     * The expected probability of winning an Opportunity in this Pipeline Stage. Valid values are [0-100].
     */
    winProbability?: number;
}
export declare class PipelineInput extends SpeakeasyBase {
    active?: boolean;
    archived?: boolean;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    displayOrder?: number;
    id?: string;
    name: string;
    stages?: PipelineStagesInput[];
    winProbabilityEnabled?: boolean;
}
export declare class PipelineStages extends SpeakeasyBase {
    displayOrder?: number;
    id?: string;
    name?: string;
    value?: string;
    /**
     * The expected probability of winning an Opportunity in this Pipeline Stage. Valid values are [0-100].
     */
    winProbability?: number;
}
export declare class Pipeline extends SpeakeasyBase {
    active?: boolean;
    archived?: boolean;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    displayOrder?: number;
    id?: string;
    name: string;
    stages?: PipelineStages[];
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    winProbabilityEnabled?: boolean;
}
