package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CostEstimationResourceCollectionFilter
 * Information about a filter used to specify which AWS resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>. 
**/
public class CostEstimationResourceCollectionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudFormation")
    public CloudFormationCostEstimationResourceCollectionFilter cloudFormation;
    public CostEstimationResourceCollectionFilter withCloudFormation(CloudFormationCostEstimationResourceCollectionFilter cloudFormation) {
        this.cloudFormation = cloudFormation;
        return this;
    }
}