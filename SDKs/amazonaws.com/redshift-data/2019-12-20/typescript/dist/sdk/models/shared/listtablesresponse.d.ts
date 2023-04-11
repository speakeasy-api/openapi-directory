import { SpeakeasyBase } from "../../../internal/utils";
import { TableMember } from "./tablemember";
/**
 * Success
 */
export declare class ListTablesResponse extends SpeakeasyBase {
    nextToken?: string;
    tables?: TableMember[];
}
