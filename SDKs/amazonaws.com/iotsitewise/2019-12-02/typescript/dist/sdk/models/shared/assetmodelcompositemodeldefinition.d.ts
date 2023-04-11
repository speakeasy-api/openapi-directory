import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model.
 */
export declare class AssetModelCompositeModelDefinition extends SpeakeasyBase {
    description?: string;
    name: string;
    /**
     * The asset property definitions for this composite model.
     */
    properties?: any;
    type: string;
}
