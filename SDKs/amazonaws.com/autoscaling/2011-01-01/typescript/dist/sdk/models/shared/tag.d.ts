import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag for an Auto Scaling group.
 */
export declare class Tag extends SpeakeasyBase {
    key: string;
    propagateAtLaunch?: boolean;
    resourceId?: string;
    resourceType?: string;
    value?: string;
}
