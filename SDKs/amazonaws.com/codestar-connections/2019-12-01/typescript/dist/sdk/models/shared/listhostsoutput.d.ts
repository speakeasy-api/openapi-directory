import { SpeakeasyBase } from "../../../internal/utils";
import { Host } from "./host";
/**
 * Success
 */
export declare class ListHostsOutput extends SpeakeasyBase {
    hosts?: Host[];
    nextToken?: string;
}
