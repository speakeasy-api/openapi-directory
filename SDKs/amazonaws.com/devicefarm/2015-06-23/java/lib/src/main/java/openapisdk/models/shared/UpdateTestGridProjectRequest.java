package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateTestGridProjectRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateTestGridProjectRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateTestGridProjectRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("projectArn")
    public String projectArn;
    public UpdateTestGridProjectRequest withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConfig")
    public TestGridVpcConfig vpcConfig;
    public UpdateTestGridProjectRequest withVpcConfig(TestGridVpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}