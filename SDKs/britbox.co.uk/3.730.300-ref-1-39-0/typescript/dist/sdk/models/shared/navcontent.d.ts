import { SpeakeasyBase } from "../../../internal/utils";
import { ItemList } from "./itemlist";
export declare class NavContent extends SpeakeasyBase {
    /**
     * The image type to target when rendering items of the list.
     *
     * @remarks
     *
     * e.g wallpaper, poster, hero3x1, logo.
     *
     */
    imageType?: string;
    /**
     * A pageable list of items.
     */
    list?: ItemList;
    /**
     * The title of the embedded navigation content.
     */
    title?: string;
}
