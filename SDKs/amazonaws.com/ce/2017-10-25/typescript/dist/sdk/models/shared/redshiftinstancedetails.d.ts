import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the Amazon Redshift instances that Amazon Web Services recommends that you purchase.
 */
export declare class RedshiftInstanceDetails extends SpeakeasyBase {
    currentGeneration?: boolean;
    family?: string;
    nodeType?: string;
    region?: string;
    sizeFlexEligible?: boolean;
}
