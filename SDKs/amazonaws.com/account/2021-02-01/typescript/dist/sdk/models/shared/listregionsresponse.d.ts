import { SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";
/**
 * Success
 */
export declare class ListRegionsResponse extends SpeakeasyBase {
    nextToken?: string;
    regions?: Region[];
}
