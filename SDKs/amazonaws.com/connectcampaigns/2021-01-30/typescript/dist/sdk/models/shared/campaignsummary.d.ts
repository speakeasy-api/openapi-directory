import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Amazon Connect campaign summary.
 */
export declare class CampaignSummary extends SpeakeasyBase {
    /**
     * The resource name of an Amazon Connect campaign.
     */
    arn: string;
    /**
     * Amazon Connect Instance Id
     */
    connectInstanceId: string;
    /**
     * Identifier representing a Campaign
     */
    id: string;
    /**
     * The name of an Amazon Connect Campaign name.
     */
    name: string;
}
