package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAuditSuppressionsRequestBodyResourceIdentifier
 * Information that identifies the noncompliant resource.
**/
public class ListAuditSuppressionsRequestBodyResourceIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public String account;
    public ListAuditSuppressionsRequestBodyResourceIdentifier withAccount(String account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCertificateId")
    public String caCertificateId;
    public ListAuditSuppressionsRequestBodyResourceIdentifier withCaCertificateId(String caCertificateId) {
        this.caCertificateId = caCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public ListAuditSuppressionsRequestBodyResourceIdentifier withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cognitoIdentityPoolId")
    public String cognitoIdentityPoolId;
    public ListAuditSuppressionsRequestBodyResourceIdentifier withCognitoIdentityPoolId(String cognitoIdentityPoolId) {
        this.cognitoIdentityPoolId = cognitoIdentityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceCertificateId")
    public String deviceCertificateId;
    public ListAuditSuppressionsRequestBodyResourceIdentifier withDeviceCertificateId(String deviceCertificateId) {
        this.deviceCertificateId = deviceCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamRoleArn")
    public String iamRoleArn;
    public ListAuditSuppressionsRequestBodyResourceIdentifier withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyVersionIdentifier")
    public openapisdk.models.shared.PolicyVersionIdentifier policyVersionIdentifier;
    public ListAuditSuppressionsRequestBodyResourceIdentifier withPolicyVersionIdentifier(openapisdk.models.shared.PolicyVersionIdentifier policyVersionIdentifier) {
        this.policyVersionIdentifier = policyVersionIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleAliasArn")
    public String roleAliasArn;
    public ListAuditSuppressionsRequestBodyResourceIdentifier withRoleAliasArn(String roleAliasArn) {
        this.roleAliasArn = roleAliasArn;
        return this;
    }
}