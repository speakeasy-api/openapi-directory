import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnConfiguration } from "./columnconfiguration";
import { ImportationCustomColumnLinks } from "./importationcustomcolumnlinks";
/**
 * The custom column configuration
**/
export declare class ImportationCustomColumn extends SpeakeasyBase {
    configuration: ColumnConfiguration;
    id: string;
    links: ImportationCustomColumnLinks;
    userColumName: string;
}
