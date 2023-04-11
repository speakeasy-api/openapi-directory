import { SpeakeasyBase } from "../../../internal/utils";
import { Association } from "./association";
/**
 * Success
 */
export declare class ListAssociationsResult extends SpeakeasyBase {
    associations?: Association[];
    nextToken?: string;
}
