import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Properties of a conversion job
 */
export declare class ConversionProperties extends SpeakeasyBase {
    dataTimestamp?: string;
    forceUefi?: boolean;
    rootVolumeName?: string;
    volumeToConversionMap?: Record<string, Record<string, string>>;
    volumeToVolumeSize?: Record<string, number>;
}
