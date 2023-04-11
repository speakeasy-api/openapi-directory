import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogColumnLinks } from "./catalogcolumnlinks";
import { ColumnConfiguration } from "./columnconfiguration";
import { DuplicateProductValueConfiguration } from "./duplicateproductvalueconfiguration";
/**
 * The catalog column configuration
 */
export declare class CatalogColumn extends SpeakeasyBase {
    /**
     * The catalog column name
     */
    catalogColumnName: string;
    /**
     * Indicates the configuration applied on the column (catalog or custom) during the importation process.
     */
    configuration: ColumnConfiguration;
    /**
     * Describe how you want to manage the duplication of the product value
     */
    duplicateProductValueConfiguration?: DuplicateProductValueConfiguration;
    /**
     * The catalog column identifier
     */
    id: string;
    /**
     * IF true, the product values of this column will be not taken in account during the importation process
     */
    ignored?: boolean;
    links: CatalogColumnLinks;
    /**
     * Column named by the user
     */
    userColumName: string;
}
