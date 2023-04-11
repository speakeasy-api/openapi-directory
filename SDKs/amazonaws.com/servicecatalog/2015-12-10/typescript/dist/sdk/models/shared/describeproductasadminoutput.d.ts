import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";
import { ProductViewDetail } from "./productviewdetail";
import { ProvisioningArtifactSummary } from "./provisioningartifactsummary";
import { Tag } from "./tag";
import { TagOptionDetail } from "./tagoptiondetail";
/**
 * Success
 */
export declare class DescribeProductAsAdminOutput extends SpeakeasyBase {
    budgets?: BudgetDetail[];
    productViewDetail?: ProductViewDetail;
    provisioningArtifactSummaries?: ProvisioningArtifactSummary[];
    tagOptions?: TagOptionDetail[];
    tags?: Tag[];
}
