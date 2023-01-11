package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatasetGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyArn")
    public String kmsKeyArn;
    public CreateDatasetGroupRequest withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateDatasetGroupRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateDatasetGroupRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}