import { SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";
/**
 * Success
 */
export declare class ListListenersResponse extends SpeakeasyBase {
    listeners?: Listener[];
    nextToken?: string;
}
