import { SpeakeasyBase } from "../../../internal/utils";
import { Template } from "./template";
/**
 * Success
 */
export declare class GetTemplateResponse extends SpeakeasyBase {
    /**
     * The content of the email, composed of a subject line, an HTML part, and a text-only part.
     */
    template?: Template;
}
