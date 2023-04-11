import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisMethodEnum } from "./analysismethodenum";
import { AnalysisRuleTypeEnum } from "./analysisruletypeenum";
import { SchemaTypeEnum } from "./schematypeenum";
/**
 * The schema summary for the objects listed by the request.
 */
export declare class SchemaSummary extends SpeakeasyBase {
    analysisMethod?: AnalysisMethodEnum;
    analysisRuleTypes: AnalysisRuleTypeEnum[];
    collaborationArn: string;
    collaborationId: string;
    createTime: Date;
    creatorAccountId: string;
    name: string;
    type: SchemaTypeEnum;
    updateTime: Date;
}
