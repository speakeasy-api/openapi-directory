import { SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";
/**
 * Success
 */
export declare class DescribeListenersOutput extends SpeakeasyBase {
    listeners?: Listener[];
    nextMarker?: string;
}
