import { SpeakeasyBase } from "../../../internal/utils";
import { LayersListItem } from "./layerslistitem";
/**
 * Success
 */
export declare class ListLayersResponse extends SpeakeasyBase {
    layers?: LayersListItem[];
    nextMarker?: string;
}
