package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteAuditSuppressionRequestBodyResourceIdentifier
 * Information that identifies the noncompliant resource.
**/
public class DeleteAuditSuppressionRequestBodyResourceIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public String account;
    public DeleteAuditSuppressionRequestBodyResourceIdentifier withAccount(String account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCertificateId")
    public String caCertificateId;
    public DeleteAuditSuppressionRequestBodyResourceIdentifier withCaCertificateId(String caCertificateId) {
        this.caCertificateId = caCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public DeleteAuditSuppressionRequestBodyResourceIdentifier withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cognitoIdentityPoolId")
    public String cognitoIdentityPoolId;
    public DeleteAuditSuppressionRequestBodyResourceIdentifier withCognitoIdentityPoolId(String cognitoIdentityPoolId) {
        this.cognitoIdentityPoolId = cognitoIdentityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceCertificateId")
    public String deviceCertificateId;
    public DeleteAuditSuppressionRequestBodyResourceIdentifier withDeviceCertificateId(String deviceCertificateId) {
        this.deviceCertificateId = deviceCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamRoleArn")
    public String iamRoleArn;
    public DeleteAuditSuppressionRequestBodyResourceIdentifier withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyVersionIdentifier")
    public openapisdk.models.shared.PolicyVersionIdentifier policyVersionIdentifier;
    public DeleteAuditSuppressionRequestBodyResourceIdentifier withPolicyVersionIdentifier(openapisdk.models.shared.PolicyVersionIdentifier policyVersionIdentifier) {
        this.policyVersionIdentifier = policyVersionIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleAliasArn")
    public String roleAliasArn;
    public DeleteAuditSuppressionRequestBodyResourceIdentifier withRoleAliasArn(String roleAliasArn) {
        this.roleAliasArn = roleAliasArn;
        return this;
    }
}