package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceResourceCost
 * An object that contains information about the estimated monthly cost to analyze an AWS resource. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
**/
public class ServiceResourceCost {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Cost")
    public Double cost;
    public ServiceResourceCost withCost(Double cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;
    public ServiceResourceCost withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public CostEstimationServiceResourceStateEnum state;
    public ServiceResourceCost withState(CostEstimationServiceResourceStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public ServiceResourceCost withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnitCost")
    public Double unitCost;
    public ServiceResourceCost withUnitCost(Double unitCost) {
        this.unitCost = unitCost;
        return this;
    }
}