import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model.
 */
export declare class AssetCompositeModel extends SpeakeasyBase {
    description?: string;
    id?: string;
    name: string;
    /**
     * The asset properties that this composite model defines.
     */
    properties: any;
    type: string;
}
