package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsIamAccessKeySessionContextSessionIssuer
 * Information about the entity that created the session.
**/
public class AwsIamAccessKeySessionContextSessionIssuer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public AwsIamAccessKeySessionContextSessionIssuer withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public AwsIamAccessKeySessionContextSessionIssuer withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalId")
    public String principalId;
    public AwsIamAccessKeySessionContextSessionIssuer withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsIamAccessKeySessionContextSessionIssuer withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserName")
    public String userName;
    public AwsIamAccessKeySessionContextSessionIssuer withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}