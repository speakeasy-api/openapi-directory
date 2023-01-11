package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateConfigRequestBody {
    @JsonProperty("configData")
    public UpdateConfigRequestBodyConfigData configData;
    public UpdateConfigRequestBody withConfigData(UpdateConfigRequestBodyConfigData configData) {
        this.configData = configData;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateConfigRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}