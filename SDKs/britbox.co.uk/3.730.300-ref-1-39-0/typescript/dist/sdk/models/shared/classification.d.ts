import { SpeakeasyBase } from "../../../internal/utils";
export declare class Classification extends SpeakeasyBase {
    /**
     * Parental advisort text.
     */
    advisoryText?: string;
    /**
     * The unique code for a classification.
     */
    code: string;
    images: Record<string, string>;
    /**
     * The level of this classification when compared with its siblings.
     *
     * @remarks
     * A higher level means a greater restriction.
     * Each classification in a system should have a unique level.
     *
     */
    level: number;
    /**
     * The name of the classification for display.
     */
    name: string;
    /**
     * The parent system code of the classification.
     */
    system: string;
}
