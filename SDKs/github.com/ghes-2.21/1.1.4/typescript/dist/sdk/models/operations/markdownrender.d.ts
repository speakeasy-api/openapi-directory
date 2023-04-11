import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The rendering mode.
 */
export declare enum MarkdownRenderRequestBodyModeEnum {
    Markdown = "markdown",
    Gfm = "gfm"
}
export declare class MarkdownRenderRequestBody extends SpeakeasyBase {
    /**
     * The repository context to use when creating references in `gfm` mode.
     */
    context?: string;
    /**
     * The rendering mode.
     */
    mode?: MarkdownRenderRequestBodyModeEnum;
    /**
     * The Markdown text to render in HTML.
     */
    text: string;
}
export declare class MarkdownRenderResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    markdownRender200TextHTMLString?: string;
}
