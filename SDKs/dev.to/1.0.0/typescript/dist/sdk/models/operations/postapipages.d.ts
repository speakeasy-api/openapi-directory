import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Controls what kind of layout the page is rendered in
 */
export declare enum PostApiPagesRequestBodyTemplateEnum {
    Contained = "contained",
    FullWithinLayout = "full_within_layout",
    NavBarIncluded = "nav_bar_included",
    Json = "json"
}
export declare class PostApiPagesRequestBody extends SpeakeasyBase {
    /**
     * For JSON pages, the JSON body
     */
    bodyJson?: string;
    /**
     * The text (in markdown) of the ad (required)
     */
    bodyMarkdown?: string;
    /**
     * For internal use, helps similar pages from one another
     */
    description?: string;
    /**
     * If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution
     */
    isTopLevelPath?: boolean;
    /**
     * Used to link to this page in URLs, must be unique and URL-safe
     */
    slug?: string;
    /**
     * Controls what kind of layout the page is rendered in
     */
    template?: PostApiPagesRequestBodyTemplateEnum;
    /**
     * Title of the page
     */
    title?: string;
}
export declare class PostApiPagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
