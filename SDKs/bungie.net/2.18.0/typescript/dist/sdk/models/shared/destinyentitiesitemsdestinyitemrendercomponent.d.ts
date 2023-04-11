import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Many items can be rendered in 3D. When you request this block, you will obtain the custom data needed to render this specific instance of the item.
 */
export declare class DestinyEntitiesItemsDestinyItemRenderComponent extends SpeakeasyBase {
    /**
     * A dictionary for rendering gear components, with:
     *
     * @remarks
     * key = Art Arrangement Region Index
     * value = The chosen Arrangement Index for the Region, based on the value of a stat on the item used for making the choice.
     */
    artRegions?: Record<string, number>;
    /**
     * If you should use custom dyes on this item, it will be indicated here.
     */
    useCustomDyes?: boolean;
}
