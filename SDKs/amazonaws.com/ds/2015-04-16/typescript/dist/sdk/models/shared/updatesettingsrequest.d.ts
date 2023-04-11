import { SpeakeasyBase } from "../../../internal/utils";
import { Setting } from "./setting";
export declare class UpdateSettingsRequest extends SpeakeasyBase {
    directoryId: string;
    settings: Setting[];
}
