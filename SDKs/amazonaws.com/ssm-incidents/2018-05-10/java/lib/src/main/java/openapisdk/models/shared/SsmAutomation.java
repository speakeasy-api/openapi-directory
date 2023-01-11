package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SsmAutomation
 * Details about the Systems Manager automation document that will be used as a runbook during an incident.
**/
public class SsmAutomation {
    @JsonProperty("documentName")
    public String documentName;
    public SsmAutomation withDocumentName(String documentName) {
        this.documentName = documentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentVersion")
    public String documentVersion;
    public SsmAutomation withDocumentVersion(String documentVersion) {
        this.documentVersion = documentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String[]> parameters;
    public SsmAutomation withParameters(java.util.Map<String, String[]> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public SsmAutomation withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetAccount")
    public SsmTargetAccountEnum targetAccount;
    public SsmAutomation withTargetAccount(SsmTargetAccountEnum targetAccount) {
        this.targetAccount = targetAccount;
        return this;
    }
}