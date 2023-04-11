import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureParameter } from "./featureparameter";
import { FeatureTypeEnum } from "./featuretypeenum";
/**
 * The metadata for a feature. It can either be metadata that you specify, or metadata that is updated automatically.
 */
export declare class FeatureMetadata extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    featureGroupArn?: string;
    featureGroupName?: string;
    featureName?: string;
    featureType?: FeatureTypeEnum;
    lastModifiedTime?: Date;
    parameters?: FeatureParameter[];
}
