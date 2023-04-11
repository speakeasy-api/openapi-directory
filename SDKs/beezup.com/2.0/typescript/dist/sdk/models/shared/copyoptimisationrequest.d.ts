import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Copy the optimisation between 2 channels
 */
export declare class CopyOptimisationRequest extends SpeakeasyBase {
    /**
     * The channel identifier
     */
    channelIdSource: string;
    /**
     * The channel identifier
     */
    channelIdTarget: string;
    /**
     * If true the existing optimisation will be kept
     */
    keepExistingOptimisation: boolean;
}
