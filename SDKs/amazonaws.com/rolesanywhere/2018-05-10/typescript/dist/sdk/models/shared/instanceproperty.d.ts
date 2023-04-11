import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A key-value pair you set that identifies a property of the authenticating instance.
 */
export declare class InstanceProperty extends SpeakeasyBase {
    failed?: boolean;
    /**
     * A list of instanceProperty objects.
     */
    properties?: any;
    seenAt?: Date;
}
