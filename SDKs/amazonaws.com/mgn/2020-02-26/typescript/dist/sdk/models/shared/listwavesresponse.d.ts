import { SpeakeasyBase } from "../../../internal/utils";
import { Wave } from "./wave";
/**
 * Success
 */
export declare class ListWavesResponse extends SpeakeasyBase {
    items?: Wave[];
    nextToken?: string;
}
