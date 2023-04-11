import { SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";
/**
 * Success
 */
export declare class UpdateDistributionWithStagingConfigResult extends SpeakeasyBase {
    /**
     * A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
     */
    distribution?: Distribution;
}
