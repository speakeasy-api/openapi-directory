package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CodeReview
 *  Information about a code review. A code review belongs to the associated repository that contains the reviewed code. 
**/
public class CodeReview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalysisTypes")
    public AnalysisTypeEnum[] analysisTypes;
    public CodeReview withAnalysisTypes(AnalysisTypeEnum[] analysisTypes) {
        this.analysisTypes = analysisTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociationArn")
    public String associationArn;
    public CodeReview withAssociationArn(String associationArn) {
        this.associationArn = associationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeReviewArn")
    public String codeReviewArn;
    public CodeReview withCodeReviewArn(String codeReviewArn) {
        this.codeReviewArn = codeReviewArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTimeStamp")
    public OffsetDateTime createdTimeStamp;
    public CodeReview withCreatedTimeStamp(OffsetDateTime createdTimeStamp) {
        this.createdTimeStamp = createdTimeStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedTimeStamp")
    public OffsetDateTime lastUpdatedTimeStamp;
    public CodeReview withLastUpdatedTimeStamp(OffsetDateTime lastUpdatedTimeStamp) {
        this.lastUpdatedTimeStamp = lastUpdatedTimeStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Metrics")
    public Metrics metrics;
    public CodeReview withMetrics(Metrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CodeReview withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Owner")
    public String owner;
    public CodeReview withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderType")
    public ProviderTypeEnum providerType;
    public CodeReview withProviderType(ProviderTypeEnum providerType) {
        this.providerType = providerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PullRequestId")
    public String pullRequestId;
    public CodeReview withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RepositoryName")
    public String repositoryName;
    public CodeReview withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceCodeType")
    public SourceCodeType sourceCodeType;
    public CodeReview withSourceCodeType(SourceCodeType sourceCodeType) {
        this.sourceCodeType = sourceCodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public JobStateEnum state;
    public CodeReview withState(JobStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReason")
    public String stateReason;
    public CodeReview withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public TypeEnum type;
    public CodeReview withType(TypeEnum type) {
        this.type = type;
        return this;
    }
}