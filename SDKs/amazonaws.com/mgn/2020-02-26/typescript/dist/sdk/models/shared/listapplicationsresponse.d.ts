import { SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
/**
 * Success
 */
export declare class ListApplicationsResponse extends SpeakeasyBase {
    items?: Application[];
    nextToken?: string;
}
