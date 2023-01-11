package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorldExportJobRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateWorldExportJobRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("iamRole")
    public String iamRole;
    public CreateWorldExportJobRequestBody withIamRole(String iamRole) {
        this.iamRole = iamRole;
        return this;
    }
    @JsonProperty("outputLocation")
    public CreateWorldExportJobRequestBodyOutputLocation outputLocation;
    public CreateWorldExportJobRequestBody withOutputLocation(CreateWorldExportJobRequestBodyOutputLocation outputLocation) {
        this.outputLocation = outputLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateWorldExportJobRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("worlds")
    public String[] worlds;
    public CreateWorldExportJobRequestBody withWorlds(String[] worlds) {
        this.worlds = worlds;
        return this;
    }
}