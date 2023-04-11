import { SpeakeasyBase } from "../../../internal/utils";
import { ProductViewSummary } from "./productviewsummary";
import { ProvisioningArtifact } from "./provisioningartifact";
/**
 * Success
 */
export declare class DescribeProductViewOutput extends SpeakeasyBase {
    productViewSummary?: ProductViewSummary;
    provisioningArtifacts?: ProvisioningArtifact[];
}
