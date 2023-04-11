import { SpeakeasyBase } from "../../../internal/utils";
import { AntiSpamTypesEnum } from "./antispamtypesenum";
/**
 * Contains the anti-spam information.
 */
export declare class UpdateAntiSpamRequest extends SpeakeasyBase {
    /**
     * Types of anti-spam scanning
     */
    type?: AntiSpamTypesEnum;
}
