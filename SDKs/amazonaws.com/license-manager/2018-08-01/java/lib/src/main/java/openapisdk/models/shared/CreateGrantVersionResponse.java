package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGrantVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantArn")
    public String grantArn;
    public CreateGrantVersionResponse withGrantArn(String grantArn) {
        this.grantArn = grantArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public GrantStatusEnum status;
    public CreateGrantVersionResponse withStatus(GrantStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public CreateGrantVersionResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}