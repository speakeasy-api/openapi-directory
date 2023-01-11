package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTestGridProjectRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateTestGridProjectRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateTestGridProjectRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConfig")
    public TestGridVpcConfig vpcConfig;
    public CreateTestGridProjectRequest withVpcConfig(TestGridVpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}