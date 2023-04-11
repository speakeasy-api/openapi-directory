import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationComponentDetail } from "./applicationcomponentdetail";
/**
 * Success
 */
export declare class ListApplicationComponentsResponse extends SpeakeasyBase {
    applicationComponentInfos?: ApplicationComponentDetail[];
    nextToken?: string;
}
