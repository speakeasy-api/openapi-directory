package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartSuiteRunRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteDefinitionVersion")
    public String suiteDefinitionVersion;
    public StartSuiteRunRequestBody withSuiteDefinitionVersion(String suiteDefinitionVersion) {
        this.suiteDefinitionVersion = suiteDefinitionVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteRunConfiguration")
    public StartSuiteRunRequestBodySuiteRunConfiguration suiteRunConfiguration;
    public StartSuiteRunRequestBody withSuiteRunConfiguration(StartSuiteRunRequestBodySuiteRunConfiguration suiteRunConfiguration) {
        this.suiteRunConfiguration = suiteRunConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public StartSuiteRunRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}