import { SpeakeasyBase } from "../../../internal/utils";
import { KeyspaceSummary } from "./keyspacesummary";
/**
 * Success
 */
export declare class ListKeyspacesResponse extends SpeakeasyBase {
    keyspaces: KeyspaceSummary[];
    nextToken?: string;
}
