package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGrantVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowedOperations")
    public AllowedOperationEnum[] allowedOperations;
    public CreateGrantVersionRequest withAllowedOperations(AllowedOperationEnum[] allowedOperations) {
        this.allowedOperations = allowedOperations;
        return this;
    }
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateGrantVersionRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("GrantArn")
    public String grantArn;
    public CreateGrantVersionRequest withGrantArn(String grantArn) {
        this.grantArn = grantArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantName")
    public String grantName;
    public CreateGrantVersionRequest withGrantName(String grantName) {
        this.grantName = grantName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceVersion")
    public String sourceVersion;
    public CreateGrantVersionRequest withSourceVersion(String sourceVersion) {
        this.sourceVersion = sourceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public GrantStatusEnum status;
    public CreateGrantVersionRequest withStatus(GrantStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public String statusReason;
    public CreateGrantVersionRequest withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
}