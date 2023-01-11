package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSuiteDefinitionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteDefinitionConfiguration")
    public CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration suiteDefinitionConfiguration;
    public CreateSuiteDefinitionRequestBody withSuiteDefinitionConfiguration(CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration suiteDefinitionConfiguration) {
        this.suiteDefinitionConfiguration = suiteDefinitionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateSuiteDefinitionRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}