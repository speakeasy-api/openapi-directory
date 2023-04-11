import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class CreateChannelResponse extends SpeakeasyBase {
    channelArn?: string;
    destinations?: Destination[];
    name?: string;
    source?: string;
    /**
     * A list of tags.
     */
    tags?: Tag[];
}
