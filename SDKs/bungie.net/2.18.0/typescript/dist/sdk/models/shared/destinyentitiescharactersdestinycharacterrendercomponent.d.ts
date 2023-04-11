import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyCharacterDestinyItemPeerView } from "./destinycharacterdestinyitempeerview";
import { DestinyDyeReference } from "./destinydyereference";
/**
 * Raw data about the customization options chosen for a character's face and appearance.
 *
 * @remarks
 * You can look up the relevant class/race/gender combo in DestinyCharacterCustomizationOptionDefinition for the character, and then look up these values within the CustomizationOptions found to pull some data about their choices. Warning: not all of that data is meaningful. Some data has useful icons. Others have nothing, and are only meant for 3D rendering purposes (which we sadly do not expose yet)
 */
export declare class DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization extends SpeakeasyBase {
    decalColor?: number;
    decalIndex?: number;
    eyeColor?: number;
    face?: number;
    featureColors?: number[];
    featureIndex?: number;
    hairColors?: number[];
    hairIndex?: number;
    lipColor?: number;
    personality?: number;
    skinColor?: number;
    wearHelmet?: boolean;
}
/**
 * A minimal view of a character's equipped items, for the purpose of rendering a summary screen or showing the character in 3D.
 */
export declare class DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView extends SpeakeasyBase {
    equipment?: DestinyCharacterDestinyItemPeerView[];
}
/**
 * Only really useful if you're attempting to render the character's current appearance in 3D, this returns a bare minimum of information, pre-aggregated, that you'll need to perform that rendering. Note that you need to combine this with other 3D assets and data from our servers.
 *
 * @remarks
 * Examine the Javascript returned by https://bungie.net/sharedbundle/spasm to see how we use this data, but be warned: the rabbit hole goes pretty deep.
 */
export declare class DestinyEntitiesCharactersDestinyCharacterRenderComponent extends SpeakeasyBase {
    /**
     * Custom dyes, calculated by iterating over the character's equipped items. Useful for pre-fetching all of the dye data needed from our server.
     */
    customDyes?: DestinyDyeReference[];
    /**
     * This is actually something that Spasm.js *doesn't* do right now, and that we don't return assets for yet. This is the data about what character customization options you picked. You can combine this with DestinyCharacterCustomizationOptionDefinition to show some cool info, and hopefully someday to actually render a user's face in 3D. We'll see if we ever end up with time for that.
     */
    customization?: DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization;
    /**
     * A minimal view of:
     *
     * @remarks
     * - Equipped items
     * - The rendering-related custom options on those equipped items
     * Combined, that should be enough to render all of the items on the equipped character.
     */
    peerView?: DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView;
}
