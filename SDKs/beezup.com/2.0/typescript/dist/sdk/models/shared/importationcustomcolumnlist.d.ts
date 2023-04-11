import { SpeakeasyBase } from "../../../internal/utils";
import { CustomColumnListLinks } from "./customcolumnlistlinks";
import { ImportationCustomColumn } from "./importationcustomcolumn";
/**
 * Custom columns of current Importation successfully retrieved
 */
export declare class ImportationCustomColumnList extends SpeakeasyBase {
    customColumns: ImportationCustomColumn[];
    links: CustomColumnListLinks;
}
