import { SpeakeasyBase } from "../../../internal/utils";
import { Template } from "./template";
export declare class UpdateTemplateRequest extends SpeakeasyBase {
    /**
     * The content of the email, composed of a subject line, an HTML part, and a text-only part.
     */
    template: Template;
}
