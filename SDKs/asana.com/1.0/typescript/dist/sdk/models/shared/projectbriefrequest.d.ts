import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *Project Brief* allows you to explain the what and why of the project to your team.
 */
export declare class ProjectBriefRequestInput extends SpeakeasyBase {
    /**
     * HTML formatted text for the project brief.
     */
    htmlText?: string;
    /**
     * The plain text of the project brief. When writing to a project brief, you can specify either `html_text` (preferred) or `text`, but not both.
     */
    text?: string;
    /**
     * The title of the project brief.
     */
    title?: string;
}
