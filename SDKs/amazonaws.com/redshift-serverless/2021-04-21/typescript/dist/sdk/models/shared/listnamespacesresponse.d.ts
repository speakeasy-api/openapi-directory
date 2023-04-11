import { SpeakeasyBase } from "../../../internal/utils";
import { Namespace } from "./namespace";
/**
 * Success
 */
export declare class ListNamespacesResponse extends SpeakeasyBase {
    namespaces: Namespace[];
    nextToken?: string;
}
