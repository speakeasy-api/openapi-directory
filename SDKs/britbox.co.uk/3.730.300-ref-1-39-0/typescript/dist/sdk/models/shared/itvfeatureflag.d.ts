import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request succeeded.
 */
export declare class ItvFeatureFlag extends SpeakeasyBase {
    /**
     * Is the feature enabled?
     */
    enabled: boolean;
    /**
     * Feature flag data.
     */
    flag?: string;
}
