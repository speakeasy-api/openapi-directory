import { SpeakeasyBase } from "../../../internal/utils";
import { StudioLifecycleConfigDetails } from "./studiolifecycleconfigdetails";
/**
 * Success
 */
export declare class ListStudioLifecycleConfigsResponse extends SpeakeasyBase {
    nextToken?: string;
    studioLifecycleConfigs?: StudioLifecycleConfigDetails[];
}
