import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the Amazon RDS instances that Amazon Web Services recommends that you purchase.
 */
export declare class RDSInstanceDetails extends SpeakeasyBase {
    currentGeneration?: boolean;
    databaseEdition?: string;
    databaseEngine?: string;
    deploymentOption?: string;
    family?: string;
    instanceType?: string;
    licenseModel?: string;
    region?: string;
    sizeFlexEligible?: boolean;
}
