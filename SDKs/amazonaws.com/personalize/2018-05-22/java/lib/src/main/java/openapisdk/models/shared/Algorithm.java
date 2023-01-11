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
 * Algorithm
 * Describes a custom algorithm.
**/
public class Algorithm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithmArn")
    public String algorithmArn;
    public Algorithm withAlgorithmArn(String algorithmArn) {
        this.algorithmArn = algorithmArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithmImage")
    public AlgorithmImage algorithmImage;
    public Algorithm withAlgorithmImage(AlgorithmImage algorithmImage) {
        this.algorithmImage = algorithmImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public Algorithm withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultHyperParameterRanges")
    public DefaultHyperParameterRanges defaultHyperParameterRanges;
    public Algorithm withDefaultHyperParameterRanges(DefaultHyperParameterRanges defaultHyperParameterRanges) {
        this.defaultHyperParameterRanges = defaultHyperParameterRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultHyperParameters")
    public java.util.Map<String, String> defaultHyperParameters;
    public Algorithm withDefaultHyperParameters(java.util.Map<String, String> defaultHyperParameters) {
        this.defaultHyperParameters = defaultHyperParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultResourceConfig")
    public java.util.Map<String, String> defaultResourceConfig;
    public Algorithm withDefaultResourceConfig(java.util.Map<String, String> defaultResourceConfig) {
        this.defaultResourceConfig = defaultResourceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public Algorithm withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Algorithm withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public Algorithm withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trainingInputMode")
    public String trainingInputMode;
    public Algorithm withTrainingInputMode(String trainingInputMode) {
        this.trainingInputMode = trainingInputMode;
        return this;
    }
}