import { SpeakeasyBase } from "../../../internal/utils";
export declare class PageSummary extends SpeakeasyBase {
    /**
     * Unique identifier for the page.
     */
    id: string;
    /**
     * True if this page is static and doesn't have any dynamic content to load.
     *
     * @remarks
     *
     * Static pages don't need to go back to the page endpoint to load page content
     * instead the page summary loaded with the sitemap should be enough to determine
     * the page template type and render based on this.
     *
     */
    isStatic: boolean;
    /**
     * True if this page is a system page type.
     *
     * @remarks
     *
     * **DEPRECATED** This property doesn't have any real use in client applications
     * anymore so shouldn't be used. It especially shouldn't be used to determine if
     * a page is static or not. Use the `isStatic` property instead.
     *
     */
    isSystemPage: boolean;
    /**
     * Key used to lookup a known page.
     */
    key?: string;
    /**
     * Unique path for the page.
     */
    path: string;
    /**
     * Identifier for of the page template to render this page.
     */
    template: string;
    /**
     * Title of the page.
     */
    title: string;
}
