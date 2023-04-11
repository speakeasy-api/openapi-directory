import { SpeakeasyBase } from "../../../internal/utils";
import { Delegate } from "./delegate";
/**
 * Success
 */
export declare class ListResourceDelegatesResponse extends SpeakeasyBase {
    delegates?: Delegate[];
    nextToken?: string;
}
