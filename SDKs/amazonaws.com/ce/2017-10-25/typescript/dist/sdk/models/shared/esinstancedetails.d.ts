import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the Amazon OpenSearch Service instances that Amazon Web Services recommends that you purchase.
 */
export declare class ESInstanceDetails extends SpeakeasyBase {
    currentGeneration?: boolean;
    instanceClass?: string;
    instanceSize?: string;
    region?: string;
    sizeFlexEligible?: boolean;
}
