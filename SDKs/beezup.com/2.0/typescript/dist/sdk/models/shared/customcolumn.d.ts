import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnConfiguration } from "./columnconfiguration";
import { CustomColumnLinks } from "./customcolumnlinks";
/**
 * The custom column configuration
**/
export declare class CustomColumn extends SpeakeasyBase {
    catalogColumnDependencies?: string[];
    configuration: ColumnConfiguration;
    id: string;
    links: CustomColumnLinks;
    userColumName: string;
}
