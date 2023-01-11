package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteGrantRequest {
    @JsonProperty("GrantArn")
    public String grantArn;
    public DeleteGrantRequest withGrantArn(String grantArn) {
        this.grantArn = grantArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public String statusReason;
    public DeleteGrantRequest withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonProperty("Version")
    public String version;
    public DeleteGrantRequest withVersion(String version) {
        this.version = version;
        return this;
    }
}