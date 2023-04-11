import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
export declare class StartDataQualityRuleRecommendationRunRequest extends SpeakeasyBase {
    clientToken?: string;
    createdRulesetName?: string;
    dataSource: DataSource;
    numberOfWorkers?: number;
    role: string;
    timeout?: number;
}
