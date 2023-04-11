import { SpeakeasyBase } from "../../../internal/utils";
import { SamsungPreviewSectionTile } from "./samsungpreviewsectiontile";
export declare class SamsungPreviewSection extends SpeakeasyBase {
    /**
     * Section position. If specified, sections are shown in ascending position order.
     */
    position?: number;
    /**
     * Tiles within the section
     */
    tiles: SamsungPreviewSectionTile[];
    /**
     * Section title
     */
    title?: string;
}
