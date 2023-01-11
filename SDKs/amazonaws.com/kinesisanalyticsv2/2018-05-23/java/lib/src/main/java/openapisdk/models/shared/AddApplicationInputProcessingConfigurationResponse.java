package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddApplicationInputProcessingConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationARN")
    public String applicationARN;
    public AddApplicationInputProcessingConfigurationResponse withApplicationArn(String applicationARN) {
        this.applicationARN = applicationARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationVersionId")
    public Long applicationVersionId;
    public AddApplicationInputProcessingConfigurationResponse withApplicationVersionId(Long applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputId")
    public String inputId;
    public AddApplicationInputProcessingConfigurationResponse withInputId(String inputId) {
        this.inputId = inputId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputProcessingConfigurationDescription")
    public InputProcessingConfigurationDescription inputProcessingConfigurationDescription;
    public AddApplicationInputProcessingConfigurationResponse withInputProcessingConfigurationDescription(InputProcessingConfigurationDescription inputProcessingConfigurationDescription) {
        this.inputProcessingConfigurationDescription = inputProcessingConfigurationDescription;
        return this;
    }
}