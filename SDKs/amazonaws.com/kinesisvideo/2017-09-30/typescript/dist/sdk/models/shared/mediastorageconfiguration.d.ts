import { SpeakeasyBase } from "../../../internal/utils";
import { MediaStorageConfigurationStatusEnum } from "./mediastorageconfigurationstatusenum";
/**
 * A structure that encapsulates, or contains, the media storage configuration properties.
 */
export declare class MediaStorageConfiguration extends SpeakeasyBase {
    status: MediaStorageConfigurationStatusEnum;
    streamARN?: string;
}
