import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
export declare class PipelineStages extends SpeakeasyBase {
    displayOrder?: number;
    id?: string;
    name?: string;
    value?: string;
    winProbability?: number;
}
export declare class PipelineStagesInput extends SpeakeasyBase {
    displayOrder?: number;
    name?: string;
    value?: string;
    winProbability?: number;
}
export declare class Pipeline extends SpeakeasyBase {
    active?: boolean;
    archived?: boolean;
    createdAt?: Date;
    currency?: CurrencyEnum;
    displayOrder?: number;
    id?: string;
    name: string;
    stages?: PipelineStages[];
    updatedAt?: Date;
    winProbabilityEnabled?: boolean;
}
export declare class PipelineInput extends SpeakeasyBase {
    active?: boolean;
    archived?: boolean;
    currency?: CurrencyEnum;
    displayOrder?: number;
    id?: string;
    name: string;
    stages?: PipelineStagesInput[];
    winProbabilityEnabled?: boolean;
}
