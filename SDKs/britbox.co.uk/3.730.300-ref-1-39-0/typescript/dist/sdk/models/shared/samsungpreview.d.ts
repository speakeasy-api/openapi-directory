import { SpeakeasyBase } from "../../../internal/utils";
import { SamsungPreviewSection } from "./samsungpreviewsection";
/**
 * The samsung public preview requested.
 */
export declare class SamsungPreview extends SpeakeasyBase {
    /**
     * For public preview only
     *
     * @remarks
     * If specified, the time at which the preview content is updated.
     * The time is at most 1 week into the future. By default, the preview
     * content is updated every 10 minutes, whenever the TV is switched on,
     * or the JSON file changes.
     *
     */
    expires?: number;
    /**
     * For public preview only
     *
     * @remarks
     * If this value is "true", the preview content is updated only at
     * the time specified by the "expires" parameter.
     *
     */
    expiresOnly?: boolean;
    /**
     * Preview sections
     */
    sections: SamsungPreviewSection[];
}
