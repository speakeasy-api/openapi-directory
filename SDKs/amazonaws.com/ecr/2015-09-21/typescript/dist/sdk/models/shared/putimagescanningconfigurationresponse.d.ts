import { SpeakeasyBase } from "../../../internal/utils";
import { ImageScanningConfiguration } from "./imagescanningconfiguration";
/**
 * Success
 */
export declare class PutImageScanningConfigurationResponse extends SpeakeasyBase {
    imageScanningConfiguration?: ImageScanningConfiguration;
    registryId?: string;
    repositoryName?: string;
}
