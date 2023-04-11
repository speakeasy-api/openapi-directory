import { SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogSummary } from "./datacatalogsummary";
/**
 * Success
 */
export declare class ListDataCatalogsOutput extends SpeakeasyBase {
    dataCatalogsSummary?: DataCatalogSummary[];
    nextToken?: string;
}
