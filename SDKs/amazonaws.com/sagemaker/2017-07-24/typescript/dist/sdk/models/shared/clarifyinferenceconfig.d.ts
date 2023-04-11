import { SpeakeasyBase } from "../../../internal/utils";
import { ClarifyFeatureTypeEnum } from "./clarifyfeaturetypeenum";
/**
 * The inference configuration parameter for the model container.
 */
export declare class ClarifyInferenceConfig extends SpeakeasyBase {
    contentTemplate?: string;
    featureHeaders?: string[];
    featureTypes?: ClarifyFeatureTypeEnum[];
    featuresAttribute?: string;
    labelAttribute?: string;
    labelHeaders?: string[];
    labelIndex?: number;
    maxPayloadInMB?: number;
    maxRecordCount?: number;
    probabilityAttribute?: string;
    probabilityIndex?: number;
}
