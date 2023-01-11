import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Copy the optimisation between 2 channels
**/
export declare class CopyOptimisationRequest extends SpeakeasyBase {
    channelIdSource: string;
    channelIdTarget: string;
    keepExistingOptimisation: boolean;
}
