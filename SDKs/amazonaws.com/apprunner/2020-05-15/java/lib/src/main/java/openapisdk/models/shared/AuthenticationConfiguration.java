package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthenticationConfiguration
 * Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.
**/
public class AuthenticationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessRoleArn")
    public String accessRoleArn;
    public AuthenticationConfiguration withAccessRoleArn(String accessRoleArn) {
        this.accessRoleArn = accessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionArn")
    public String connectionArn;
    public AuthenticationConfiguration withConnectionArn(String connectionArn) {
        this.connectionArn = connectionArn;
        return this;
    }
}