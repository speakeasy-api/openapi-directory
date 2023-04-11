import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";
/**
 * Products optimisatisation copied
 */
export declare class CopyOptimisationResponse extends SpeakeasyBase {
    /**
     * The catalog product count
     */
    catalogProductCount: number;
    /**
     * The basic info related to a channel
     */
    channel: BeezUPCommonChannelBasicInfo;
    /**
     * The enabled product count
     */
    enabledProductCount: number;
}
