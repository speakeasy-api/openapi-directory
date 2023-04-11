import { SpeakeasyBase } from "../../../internal/utils";
import { BatchError } from "./batcherror";
import { Channel } from "./channel";
/**
 * Success
 */
export declare class BatchGetChannelResponse extends SpeakeasyBase {
    channels?: Channel[];
    errors?: BatchError[];
}
