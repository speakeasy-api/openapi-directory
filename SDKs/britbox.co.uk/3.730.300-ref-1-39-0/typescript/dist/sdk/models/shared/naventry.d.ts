import { SpeakeasyBase } from "../../../internal/utils";
import { NavContent } from "./navcontent";
export declare class NavEntry extends SpeakeasyBase {
    /**
     * Child nav entries.
     */
    children?: NavEntry[];
    content?: NavContent;
    /**
     * A map of custom fields defined by a curator for a nav entry.
     */
    customFields?: Record<string, any>;
    /**
     * The depth of the NavEntry (top level is 0)
     */
    depth: number;
    /**
     * True if this is a featured menu item.
     *
     * @remarks
     *
     * Featured menu items may have a more prominent presentation than others in the navigation.
     *
     */
    featured?: boolean;
    /**
     * The icon for this nav entry.
     */
    icon?: string;
    /**
     * The text label for this nav entry.
     */
    label?: string;
    /**
     * The path this nav entry links to.
     *
     * @remarks
     * May be undefined if the nav entry is not clickable e.g. a nav heading.
     * If the value begins with `http` then it's an external url.
     *
     */
    path?: string;
}
