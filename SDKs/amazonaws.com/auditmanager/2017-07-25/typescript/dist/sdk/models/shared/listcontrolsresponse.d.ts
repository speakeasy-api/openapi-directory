import { SpeakeasyBase } from "../../../internal/utils";
import { ControlMetadata } from "./controlmetadata";
/**
 * Success
 */
export declare class ListControlsResponse extends SpeakeasyBase {
    controlMetadataList?: ControlMetadata[];
    nextToken?: string;
}
