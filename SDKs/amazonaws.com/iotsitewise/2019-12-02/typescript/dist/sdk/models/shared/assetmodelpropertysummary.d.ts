import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
import { PropertyType } from "./propertytype";
/**
 * Contains a summary of a property associated with a model.
 */
export declare class AssetModelPropertySummary extends SpeakeasyBase {
    assetModelCompositeModelId?: string;
    dataType: PropertyDataTypeEnum;
    dataTypeSpec?: string;
    id?: string;
    name: string;
    /**
     * Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
     */
    type: PropertyType;
    unit?: string;
}
