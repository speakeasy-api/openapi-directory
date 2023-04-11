import { SpeakeasyBase } from "../../../internal/utils";
import { ContactChannel } from "./contactchannel";
/**
 * Success
 */
export declare class ListContactChannelsResult extends SpeakeasyBase {
    contactChannels: ContactChannel[];
    nextToken?: string;
}
