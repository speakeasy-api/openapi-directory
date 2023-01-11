package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IamUserIdentity
 * Contains information about an Identity and Access Management user.
**/
public class IamUserIdentity {
    @JsonProperty("arn")
    public String arn;
    public IamUserIdentity withArn(String arn) {
        this.arn = arn;
        return this;
    }
}