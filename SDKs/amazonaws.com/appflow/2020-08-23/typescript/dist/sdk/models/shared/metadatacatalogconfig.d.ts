import { SpeakeasyBase } from "../../../internal/utils";
import { GlueDataCatalogConfig } from "./gluedatacatalogconfig";
/**
 * Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.
 */
export declare class MetadataCatalogConfig extends SpeakeasyBase {
    glueDataCatalog?: GlueDataCatalogConfig;
}
