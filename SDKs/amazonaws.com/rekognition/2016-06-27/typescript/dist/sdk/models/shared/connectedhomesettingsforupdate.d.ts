import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The label detection settings you want to use in your stream processor. This includes the labels you want the stream processor to detect and the minimum confidence level allowed to label objects.
 */
export declare class ConnectedHomeSettingsForUpdate extends SpeakeasyBase {
    labels?: string[];
    minConfidence?: number;
}
