import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model.
 */
export declare class AssetModelCompositeModel extends SpeakeasyBase {
    description?: string;
    id?: string;
    name: string;
    /**
     * The asset property definitions for this composite model.
     */
    properties?: any;
    type: string;
}
