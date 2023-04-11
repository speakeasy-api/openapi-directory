import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalResources } from "./additionalresources";
import { ChoiceContent } from "./choicecontent";
/**
 * A choice available to answer question.
 */
export declare class Choice extends SpeakeasyBase {
    additionalResources?: AdditionalResources[];
    /**
     * The ID of a choice.
     */
    choiceId?: string;
    /**
     * The description of a choice.
     */
    description?: string;
    helpfulResource?: ChoiceContent;
    improvementPlan?: ChoiceContent;
    /**
     * The title of a choice.
     */
    title?: string;
}
