import { SpeakeasyBase } from "../../../internal/utils";
import { UserEmailViewDefinitionSetting } from "./useremailviewdefinitionsetting";
/**
 * Represents a data-driven view for Email settings. Web/Mobile UI can use this data to show new EMail settings consistently without further manual work.
 */
export declare class UserEmailViewDefinition extends SpeakeasyBase {
    /**
     * The identifier for this view.
     */
    name?: string;
    /**
     * The ordered list of settings to show in this view.
     */
    viewSettings?: UserEmailViewDefinitionSetting[];
}
