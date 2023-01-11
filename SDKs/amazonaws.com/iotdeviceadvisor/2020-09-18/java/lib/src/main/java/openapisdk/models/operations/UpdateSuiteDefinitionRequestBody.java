package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSuiteDefinitionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteDefinitionConfiguration")
    public UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration suiteDefinitionConfiguration;
    public UpdateSuiteDefinitionRequestBody withSuiteDefinitionConfiguration(UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration suiteDefinitionConfiguration) {
        this.suiteDefinitionConfiguration = suiteDefinitionConfiguration;
        return this;
    }
}