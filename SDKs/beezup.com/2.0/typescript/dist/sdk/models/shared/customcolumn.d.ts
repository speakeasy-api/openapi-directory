import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnConfiguration } from "./columnconfiguration";
import { CustomColumnLinks } from "./customcolumnlinks";
/**
 * The custom column configuration
 */
export declare class CustomColumn extends SpeakeasyBase {
    catalogColumnDependencies?: string[];
    /**
     * Indicates the configuration applied on the column (catalog or custom) during the importation process.
     */
    configuration: ColumnConfiguration;
    /**
     * The catalog column identifier
     */
    id: string;
    links: CustomColumnLinks;
    /**
     * Column named by the user
     */
    userColumName: string;
}
