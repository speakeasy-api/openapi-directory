import { SpeakeasyBase } from "../../../internal/utils";
import { InterpolatedAssetPropertyValue } from "./interpolatedassetpropertyvalue";
/**
 * Success
 */
export declare class GetInterpolatedAssetPropertyValuesResponse extends SpeakeasyBase {
    interpolatedAssetPropertyValues: InterpolatedAssetPropertyValue[];
    nextToken?: string;
}
