import { SpeakeasyBase } from "../../../internal/utils";
import { Layer } from "./layer";
import { LayerFailure } from "./layerfailure";
/**
 * Success
 */
export declare class BatchCheckLayerAvailabilityResponse extends SpeakeasyBase {
    failures?: LayerFailure[];
    layers?: Layer[];
}
