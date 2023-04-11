import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock } from "./destinydefinitionspresentationdestinypresentationnoderequirementsblock";
export declare class DestinyDefinitionsCollectiblesDestinyCollectibleStateBlock extends SpeakeasyBase {
    obscuredOverrideItemHash?: number;
    /**
     * Presentation nodes can be restricted by various requirements. This defines the rules of those requirements, and the message(s) to be shown if these requirements aren't met.
     */
    requirements?: DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock;
}
