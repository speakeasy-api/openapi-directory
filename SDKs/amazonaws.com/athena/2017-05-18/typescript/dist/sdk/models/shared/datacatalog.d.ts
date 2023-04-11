import { SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogTypeEnum } from "./datacatalogtypeenum";
/**
 * <p>Contains information about a data catalog in an Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>
 */
export declare class DataCatalog extends SpeakeasyBase {
    description?: string;
    name: string;
    parameters?: Record<string, string>;
    type: DataCatalogTypeEnum;
}
