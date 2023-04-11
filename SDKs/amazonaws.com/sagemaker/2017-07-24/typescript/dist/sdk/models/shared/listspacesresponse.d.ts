import { SpeakeasyBase } from "../../../internal/utils";
import { SpaceDetails } from "./spacedetails";
/**
 * Success
 */
export declare class ListSpacesResponse extends SpeakeasyBase {
    nextToken?: string;
    spaces?: SpaceDetails[];
}
