import { SpeakeasyBase } from "../../../internal/utils";
import { AntiSpamTypesEnum } from "./antispamtypesenum";
export declare class AntiSpam extends SpeakeasyBase {
    /**
     * Allowed types of anti-spam scanning for this mail zone
     */
    allowedTypes?: AntiSpamTypesEnum[];
    /**
     * Types of anti-spam scanning
     */
    type?: AntiSpamTypesEnum;
}
