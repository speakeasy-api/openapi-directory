import { SpeakeasyBase } from "../../../internal/utils";
import { SupportedHardwareTypeEnum } from "./supportedhardwaretypeenum";
/**
 * Information about an Outpost.
 */
export declare class Outpost extends SpeakeasyBase {
    /**
     * The Availability Zone.
     */
    availabilityZone?: string;
    /**
     * The ID of the Availability Zone.
     */
    availabilityZoneId?: string;
    /**
     * The description of the Outpost.
     */
    description?: string;
    /**
     * The life cycle status.
     */
    lifeCycleStatus?: string;
    /**
     * The name of the Outpost.
     */
    name?: string;
    /**
     * The Amazon Resource Name (ARN) of the Outpost.
     */
    outpostArn?: string;
    outpostId?: string;
    /**
     * The Amazon Web Services account ID of the Outpost owner.
     */
    ownerId?: string;
    /**
     * The Amazon Resource Name (ARN) of the site.
     */
    siteArn?: string;
    /**
     * The ID of the site.
     */
    siteId?: string;
    supportedHardwareType?: SupportedHardwareTypeEnum;
    tags?: Record<string, string>;
}
