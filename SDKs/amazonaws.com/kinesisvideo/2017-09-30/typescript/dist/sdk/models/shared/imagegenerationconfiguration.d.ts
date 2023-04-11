import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationStatusEnum } from "./configurationstatusenum";
import { FormatEnum } from "./formatenum";
import { ImageGenerationDestinationConfig } from "./imagegenerationdestinationconfig";
import { ImageSelectorTypeEnum } from "./imageselectortypeenum";
/**
 * The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream.
 */
export declare class ImageGenerationConfiguration extends SpeakeasyBase {
    destinationConfig: ImageGenerationDestinationConfig;
    format: FormatEnum;
    formatConfig?: Record<string, string>;
    heightPixels?: number;
    imageSelectorType: ImageSelectorTypeEnum;
    samplingInterval: number;
    status: ConfigurationStatusEnum;
    widthPixels?: number;
}
