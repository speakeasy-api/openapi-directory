import { SpeakeasyBase } from "../../../internal/utils";
export declare class PublicChannelInfo extends SpeakeasyBase {
    /**
     * The channel home url
     */
    homeUrl: string;
    /**
     * The channel logo url
     */
    logoUrl: string;
    /**
     * The channel name
     */
    name: string;
    /**
     * The sector list related to a channel
     */
    sectors?: string[];
    /**
     * The type list related to a channel
     */
    types: string[];
}
