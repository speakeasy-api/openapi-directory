import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentConfigModel } from "./experimentconfigmodel";
/**
 * input
 */
export declare class ExperimentModel extends SpeakeasyBase {
    active?: boolean;
    changedFieldsAndInitialValues?: Record<string, any>;
    complete?: boolean;
    config?: ExperimentConfigModel;
    endDate?: Date;
    id?: number;
    measurements?: string;
    measurementsEsQuery?: string;
    name?: string;
    percentHash?: string;
    publishedStages?: string[];
    startDate?: Date;
}
