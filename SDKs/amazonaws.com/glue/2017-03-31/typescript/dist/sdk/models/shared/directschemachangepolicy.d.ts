import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateCatalogBehaviorEnum } from "./updatecatalogbehaviorenum";
/**
 * A policy that specifies update behavior for the crawler.
 */
export declare class DirectSchemaChangePolicy extends SpeakeasyBase {
    database?: string;
    enableUpdateCatalog?: boolean;
    table?: string;
    updateBehavior?: UpdateCatalogBehaviorEnum;
}
