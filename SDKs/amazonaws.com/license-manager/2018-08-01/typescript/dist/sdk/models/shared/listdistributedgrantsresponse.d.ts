import { SpeakeasyBase } from "../../../internal/utils";
import { Grant } from "./grant";
/**
 * Success
 */
export declare class ListDistributedGrantsResponse extends SpeakeasyBase {
    grants?: Grant[];
    nextToken?: string;
}
