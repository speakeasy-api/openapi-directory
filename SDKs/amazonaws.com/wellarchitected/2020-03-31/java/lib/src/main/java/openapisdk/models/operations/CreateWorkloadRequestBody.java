package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorkloadRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountIds")
    public String[] accountIds;
    public CreateWorkloadRequestBody withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArchitecturalDesign")
    public String architecturalDesign;
    public CreateWorkloadRequestBody withArchitecturalDesign(String architecturalDesign) {
        this.architecturalDesign = architecturalDesign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegions")
    public String[] awsRegions;
    public CreateWorkloadRequestBody withAwsRegions(String[] awsRegions) {
        this.awsRegions = awsRegions;
        return this;
    }
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public CreateWorkloadRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public CreateWorkloadRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Environment")
    public CreateWorkloadRequestBodyEnvironmentEnum environment;
    public CreateWorkloadRequestBody withEnvironment(CreateWorkloadRequestBodyEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Industry")
    public String industry;
    public CreateWorkloadRequestBody withIndustry(String industry) {
        this.industry = industry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndustryType")
    public String industryType;
    public CreateWorkloadRequestBody withIndustryType(String industryType) {
        this.industryType = industryType;
        return this;
    }
    @JsonProperty("Lenses")
    public String[] lenses;
    public CreateWorkloadRequestBody withLenses(String[] lenses) {
        this.lenses = lenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonAwsRegions")
    public String[] nonAwsRegions;
    public CreateWorkloadRequestBody withNonAwsRegions(String[] nonAwsRegions) {
        this.nonAwsRegions = nonAwsRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public CreateWorkloadRequestBody withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PillarPriorities")
    public String[] pillarPriorities;
    public CreateWorkloadRequestBody withPillarPriorities(String[] pillarPriorities) {
        this.pillarPriorities = pillarPriorities;
        return this;
    }
    @JsonProperty("ReviewOwner")
    public String reviewOwner;
    public CreateWorkloadRequestBody withReviewOwner(String reviewOwner) {
        this.reviewOwner = reviewOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateWorkloadRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("WorkloadName")
    public String workloadName;
    public CreateWorkloadRequestBody withWorkloadName(String workloadName) {
        this.workloadName = workloadName;
        return this;
    }
}