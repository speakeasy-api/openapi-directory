package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseSettingsEnterpriseSaml {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate")
    public String certificate;
    public EnterpriseSettingsEnterpriseSaml withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate_path")
    public String certificatePath;
    public EnterpriseSettingsEnterpriseSaml withCertificatePath(String certificatePath) {
        this.certificatePath = certificatePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disable_admin_demote")
    public Boolean disableAdminDemote;
    public EnterpriseSettingsEnterpriseSaml withDisableAdminDemote(Boolean disableAdminDemote) {
        this.disableAdminDemote = disableAdminDemote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idp_initiated_sso")
    public Boolean idpInitiatedSso;
    public EnterpriseSettingsEnterpriseSaml withIdpInitiatedSso(Boolean idpInitiatedSso) {
        this.idpInitiatedSso = idpInitiatedSso;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public EnterpriseSettingsEnterpriseSaml withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sso_url")
    public String ssoUrl;
    public EnterpriseSettingsEnterpriseSaml withSsoUrl(String ssoUrl) {
        this.ssoUrl = ssoUrl;
        return this;
    }
}