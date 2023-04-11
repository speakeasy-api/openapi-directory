import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";
import { LaunchPath } from "./launchpath";
import { ProductViewSummary } from "./productviewsummary";
import { ProvisioningArtifact } from "./provisioningartifact";
/**
 * Success
 */
export declare class DescribeProductOutput extends SpeakeasyBase {
    budgets?: BudgetDetail[];
    launchPaths?: LaunchPath[];
    productViewSummary?: ProductViewSummary;
    provisioningArtifacts?: ProvisioningArtifact[];
}
