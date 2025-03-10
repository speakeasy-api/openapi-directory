import { SpeakeasyBase } from "../../../internal/utils";
import { LayerAvailabilityEnum } from "./layeravailabilityenum";
/**
 * An object that represents an Amazon ECR image layer.
 */
export declare class Layer extends SpeakeasyBase {
    layerAvailability?: LayerAvailabilityEnum;
    layerDigest?: string;
    layerSize?: number;
    mediaType?: string;
}
