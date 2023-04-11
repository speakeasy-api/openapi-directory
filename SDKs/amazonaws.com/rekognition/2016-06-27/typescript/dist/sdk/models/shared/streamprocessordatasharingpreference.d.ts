import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Allows you to opt in or opt out to share data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams.
 */
export declare class StreamProcessorDataSharingPreference extends SpeakeasyBase {
    optIn: boolean;
}
