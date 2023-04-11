import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { Tag } from "./tag";
export declare class CreateChannelRequest extends SpeakeasyBase {
    destinations: Destination[];
    name: string;
    source: string;
    /**
     * A list of tags.
     */
    tags?: Tag[];
}
