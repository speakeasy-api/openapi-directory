package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTrackerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateTrackerRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public CreateTrackerRequestBody withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonProperty("PricingPlan")
    public CreateTrackerRequestBodyPricingPlanEnum pricingPlan;
    public CreateTrackerRequestBody withPricingPlan(CreateTrackerRequestBodyPricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PricingPlanDataSource")
    public String pricingPlanDataSource;
    public CreateTrackerRequestBody withPricingPlanDataSource(String pricingPlanDataSource) {
        this.pricingPlanDataSource = pricingPlanDataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateTrackerRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("TrackerName")
    public String trackerName;
    public CreateTrackerRequestBody withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}