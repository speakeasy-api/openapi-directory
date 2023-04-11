import { SpeakeasyBase } from "../../../internal/utils";
export declare class SamsungPreviewSectionTile extends SpeakeasyBase {
    /**
     * Data to send to the application when the tile is clicked
     */
    actionData: string;
    /**
     * Time to begin showing the tile
     */
    displayFrom?: Date;
    /**
     * Time to stop showing the tile
     */
    displayUntil?: Date;
    /**
     * Thumbnail image aspect ratio
     *
     * @remarks
     *   "16:9"
     *   "4:3"
     *   "1:1" (default)
     *   "2:3"
     *   The thumbnail height is fixed at 250 px on presentation.
     *
     */
    imageRatio: string;
    /**
     * Thumbnail image URL
     */
    imageUrl: string;
    /**
     * If "true", a "Play" icon is shown over the thumbnail image
     */
    isPlayable: boolean;
    /**
     * Section position. If specified, sections are shown in ascending position order
     */
    position?: number;
    /**
     * Tile subtitle
     */
    subtitle?: string;
    /**
     * Tile title
     */
    title?: string;
}
