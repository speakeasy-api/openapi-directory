package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsIamAccessKeyDetails
 * IAM access key details related to a finding.
**/
public class AwsIamAccessKeyDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessKeyId")
    public String accessKeyId;
    public AwsIamAccessKeyDetails withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public AwsIamAccessKeyDetails withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedAt")
    public String createdAt;
    public AwsIamAccessKeyDetails withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalId")
    public String principalId;
    public AwsIamAccessKeyDetails withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalName")
    public String principalName;
    public AwsIamAccessKeyDetails withPrincipalName(String principalName) {
        this.principalName = principalName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalType")
    public String principalType;
    public AwsIamAccessKeyDetails withPrincipalType(String principalType) {
        this.principalType = principalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SessionContext")
    public AwsIamAccessKeySessionContext sessionContext;
    public AwsIamAccessKeyDetails withSessionContext(AwsIamAccessKeySessionContext sessionContext) {
        this.sessionContext = sessionContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public AwsIamAccessKeyStatusEnum status;
    public AwsIamAccessKeyDetails withStatus(AwsIamAccessKeyStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserName")
    public java.util.Map<String, Object> userName;
    public AwsIamAccessKeyDetails withUserName(java.util.Map<String, Object> userName) {
        this.userName = userName;
        return this;
    }
}