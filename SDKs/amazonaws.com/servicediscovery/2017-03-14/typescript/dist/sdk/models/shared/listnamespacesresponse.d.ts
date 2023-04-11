import { SpeakeasyBase } from "../../../internal/utils";
import { NamespaceSummary } from "./namespacesummary";
/**
 * Success
 */
export declare class ListNamespacesResponse extends SpeakeasyBase {
    namespaces?: NamespaceSummary[];
    nextToken?: string;
}
