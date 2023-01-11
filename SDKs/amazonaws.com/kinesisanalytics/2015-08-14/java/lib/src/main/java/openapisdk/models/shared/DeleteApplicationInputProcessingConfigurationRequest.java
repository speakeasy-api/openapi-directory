package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteApplicationInputProcessingConfigurationRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public DeleteApplicationInputProcessingConfigurationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public DeleteApplicationInputProcessingConfigurationRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
    @JsonProperty("InputId")
    public String inputId;
    public DeleteApplicationInputProcessingConfigurationRequest withInputId(String inputId) {
        this.inputId = inputId;
        return this;
    }
}