import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnConfiguration } from "./columnconfiguration";
import { ImportationCustomColumnLinks } from "./importationcustomcolumnlinks";
/**
 * The custom column configuration
 */
export declare class ImportationCustomColumn extends SpeakeasyBase {
    /**
     * Indicates the configuration applied on the column (catalog or custom) during the importation process.
     */
    configuration: ColumnConfiguration;
    /**
     * The catalog column identifier
     */
    id: string;
    links: ImportationCustomColumnLinks;
    /**
     * Column named by the user
     */
    userColumName: string;
}
