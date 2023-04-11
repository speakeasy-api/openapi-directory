import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit.
 */
export declare class MaximumAllowedResources extends SpeakeasyBase {
    cpu: string;
    disk?: string;
    memory: string;
}
