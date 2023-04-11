import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { FeatureTypeEnum } from "./featuretypeenum";
import { HumanLoopConfig } from "./humanloopconfig";
import { QueriesConfig } from "./queriesconfig";
export declare class AnalyzeDocumentRequest extends SpeakeasyBase {
    document: Document;
    featureTypes: FeatureTypeEnum[];
    humanLoopConfig?: HumanLoopConfig;
    queriesConfig?: QueriesConfig;
}
