package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeletePermissionRequest {
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public DeletePermissionRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
    @JsonProperty("Principal")
    public String principal;
    public DeletePermissionRequest withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceAccount")
    public String sourceAccount;
    public DeletePermissionRequest withSourceAccount(String sourceAccount) {
        this.sourceAccount = sourceAccount;
        return this;
    }
}