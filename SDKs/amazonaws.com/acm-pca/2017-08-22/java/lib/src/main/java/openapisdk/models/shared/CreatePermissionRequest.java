package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePermissionRequest {
    @JsonProperty("Actions")
    public ActionTypeEnum[] actions;
    public CreatePermissionRequest withActions(ActionTypeEnum[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public CreatePermissionRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
    @JsonProperty("Principal")
    public String principal;
    public CreatePermissionRequest withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceAccount")
    public String sourceAccount;
    public CreatePermissionRequest withSourceAccount(String sourceAccount) {
        this.sourceAccount = sourceAccount;
        return this;
    }
}