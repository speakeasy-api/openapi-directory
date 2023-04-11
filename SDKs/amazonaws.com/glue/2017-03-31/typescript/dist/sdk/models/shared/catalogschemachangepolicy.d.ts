import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateCatalogBehaviorEnum } from "./updatecatalogbehaviorenum";
/**
 * A policy that specifies update behavior for the crawler.
 */
export declare class CatalogSchemaChangePolicy extends SpeakeasyBase {
    enableUpdateCatalog?: boolean;
    updateBehavior?: UpdateCatalogBehaviorEnum;
}
