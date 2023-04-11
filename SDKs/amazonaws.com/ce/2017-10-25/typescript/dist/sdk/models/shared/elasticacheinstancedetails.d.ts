import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the Amazon ElastiCache instances that Amazon Web Services recommends that you purchase.
 */
export declare class ElastiCacheInstanceDetails extends SpeakeasyBase {
    currentGeneration?: boolean;
    family?: string;
    nodeType?: string;
    productDescription?: string;
    region?: string;
    sizeFlexEligible?: boolean;
}
