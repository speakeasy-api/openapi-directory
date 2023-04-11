import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisMethodEnum } from "./analysismethodenum";
import { AnalysisRuleTypeEnum } from "./analysisruletypeenum";
import { Column } from "./column";
import { SchemaTypeEnum } from "./schematypeenum";
/**
 * A schema is a relation within a collaboration.
 */
export declare class Schema extends SpeakeasyBase {
    analysisMethod?: AnalysisMethodEnum;
    analysisRuleTypes: AnalysisRuleTypeEnum[];
    collaborationArn: string;
    collaborationId: string;
    columns: Column[];
    createTime: Date;
    creatorAccountId: string;
    description: string;
    name: string;
    partitionKeys: Column[];
    type: SchemaTypeEnum;
    updateTime: Date;
}
