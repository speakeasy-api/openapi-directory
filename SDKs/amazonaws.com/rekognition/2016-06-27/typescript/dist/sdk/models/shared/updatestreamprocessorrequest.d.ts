import { SpeakeasyBase } from "../../../internal/utils";
import { RegionOfInterest } from "./regionofinterest";
import { StreamProcessorDataSharingPreference } from "./streamprocessordatasharingpreference";
import { StreamProcessorParameterToDeleteEnum } from "./streamprocessorparametertodeleteenum";
import { StreamProcessorSettingsForUpdate } from "./streamprocessorsettingsforupdate";
export declare class UpdateStreamProcessorRequest extends SpeakeasyBase {
    dataSharingPreferenceForUpdate?: StreamProcessorDataSharingPreference;
    name: string;
    parametersToDelete?: StreamProcessorParameterToDeleteEnum[];
    regionsOfInterestForUpdate?: RegionOfInterest[];
    settingsForUpdate?: StreamProcessorSettingsForUpdate;
}
