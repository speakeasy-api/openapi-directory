import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnConfiguration } from "./columnconfiguration";
import { DuplicateProductValueConfiguration } from "./duplicateproductvalueconfiguration";
import { CatalogColumnLinks } from "./catalogcolumnlinks";
/**
 * The catalog column configuration
**/
export declare class CatalogColumn extends SpeakeasyBase {
    catalogColumnName: string;
    configuration: ColumnConfiguration;
    duplicateProductValueConfiguration?: DuplicateProductValueConfiguration;
    id: string;
    ignored?: boolean;
    links: CatalogColumnLinks;
    userColumName: string;
}
