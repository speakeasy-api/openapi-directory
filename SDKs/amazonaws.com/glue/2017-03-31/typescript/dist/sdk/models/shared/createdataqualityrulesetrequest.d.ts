import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityTargetTable } from "./dataqualitytargettable";
export declare class CreateDataQualityRulesetRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    name: string;
    ruleset: string;
    tags?: Record<string, string>;
    targetTable?: DataQualityTargetTable;
}
