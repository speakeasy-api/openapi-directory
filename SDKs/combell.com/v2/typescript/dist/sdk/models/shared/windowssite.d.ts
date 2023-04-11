import { SpeakeasyBase } from "../../../internal/utils";
import { SiteBinding } from "./sitebinding";
export declare class WindowsSite extends SpeakeasyBase {
    /**
     * The bindings for the website.
     */
    bindings?: SiteBinding[];
    /**
     * The name of the website.
     */
    name?: string;
    /**
     * The path of the website.
     */
    path?: string;
}
