import { SpeakeasyBase } from "../../../internal/utils";
import { Collector } from "./collector";
/**
 * Success
 */
export declare class ListCollectorsResponse extends SpeakeasyBase {
    collectors?: Collector[];
    nextToken?: string;
}
