import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationComponent } from "./applicationcomponent";
/**
 * Success
 */
export declare class ListComponentsResponse extends SpeakeasyBase {
    applicationComponentList?: ApplicationComponent[];
    nextToken?: string;
}
