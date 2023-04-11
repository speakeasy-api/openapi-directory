import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionAlias } from "./connectionalias";
/**
 * Success
 */
export declare class DescribeConnectionAliasesResult extends SpeakeasyBase {
    connectionAliases?: ConnectionAlias[];
    nextToken?: string;
}
