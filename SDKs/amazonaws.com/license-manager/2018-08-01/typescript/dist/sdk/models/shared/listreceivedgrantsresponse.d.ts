import { SpeakeasyBase } from "../../../internal/utils";
import { Grant } from "./grant";
/**
 * Success
 */
export declare class ListReceivedGrantsResponse extends SpeakeasyBase {
    grants?: Grant[];
    nextToken?: string;
}
