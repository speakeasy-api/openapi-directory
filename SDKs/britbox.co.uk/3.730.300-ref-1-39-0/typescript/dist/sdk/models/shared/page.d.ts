import { SpeakeasyBase } from "../../../internal/utils";
import { ItemDetail } from "./itemdetail";
import { ItemList } from "./itemlist";
import { PageEntry } from "./pageentry";
import { PageMetadata } from "./pagemetadata";
import { Theme } from "./theme";
/**
 * The page requested.
 */
export declare class Page extends SpeakeasyBase {
    /**
     * A map of custom fields defined by a curator for a page.
     */
    customFields?: Record<string, any>;
    /**
     * Entries of a page
     */
    entries: PageEntry[];
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
    item?: ItemDetail;
    /**
     * Key used to lookup a known page.
     */
    key?: string;
    /**
     * A pageable list of items.
     */
    list?: ItemList;
    /**
     * Metadata associated with a page. Primarily intended for SEO usage.
     */
    metadata?: PageMetadata;
    /**
     * Unique path for the page.
     */
    path: string;
    /**
     * Identifier for of the page template to render this page.
     */
    template: string;
    themes?: Theme[];
    /**
     * Title of the page.
     */
    title: string;
}
