import { SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationCostEstimationResourceCollectionFilter } from "./cloudformationcostestimationresourcecollectionfilter";
import { TagCostEstimationResourceCollectionFilter } from "./tagcostestimationresourcecollectionfilter";
/**
 * Information about a filter used to specify which Amazon Web Services resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
 */
export declare class CostEstimationResourceCollectionFilter extends SpeakeasyBase {
    cloudFormation?: CloudFormationCostEstimationResourceCollectionFilter;
    tags?: TagCostEstimationResourceCollectionFilter[];
}
