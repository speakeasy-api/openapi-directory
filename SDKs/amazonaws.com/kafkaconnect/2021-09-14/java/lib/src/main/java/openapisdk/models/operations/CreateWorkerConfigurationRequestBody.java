package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorkerConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateWorkerConfigurationRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateWorkerConfigurationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("propertiesFileContent")
    public String propertiesFileContent;
    public CreateWorkerConfigurationRequestBody withPropertiesFileContent(String propertiesFileContent) {
        this.propertiesFileContent = propertiesFileContent;
        return this;
    }
}