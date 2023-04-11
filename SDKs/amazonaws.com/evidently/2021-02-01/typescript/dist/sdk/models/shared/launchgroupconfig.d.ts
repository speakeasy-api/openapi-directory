import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that defines one launch group in a launch. A launch group is a variation of the feature that you are including in the launch.
 */
export declare class LaunchGroupConfig extends SpeakeasyBase {
    description?: string;
    feature: string;
    name: string;
    variation: string;
}
