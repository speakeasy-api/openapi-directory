package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AcceptGrantResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantArn")
    public String grantArn;
    public AcceptGrantResponse withGrantArn(String grantArn) {
        this.grantArn = grantArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public GrantStatusEnum status;
    public AcceptGrantResponse withStatus(GrantStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public AcceptGrantResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}