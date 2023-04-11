import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureParameter } from "./featureparameter";
import { FeatureTypeEnum } from "./featuretypeenum";
/**
 * Success
 */
export declare class DescribeFeatureMetadataResponse extends SpeakeasyBase {
    creationTime: Date;
    description?: string;
    featureGroupArn: string;
    featureGroupName: string;
    featureName: string;
    featureType: FeatureTypeEnum;
    lastModifiedTime: Date;
    parameters?: FeatureParameter[];
}
