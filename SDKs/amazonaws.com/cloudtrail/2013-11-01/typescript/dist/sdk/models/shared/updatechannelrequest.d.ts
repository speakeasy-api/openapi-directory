import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
export declare class UpdateChannelRequest extends SpeakeasyBase {
    channel: string;
    destinations?: Destination[];
    name?: string;
}
