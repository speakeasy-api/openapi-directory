package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UsernameConfigurationType
 * The username configuration type. 
**/
public class UsernameConfigurationType {
    @JsonProperty("CaseSensitive")
    public Boolean caseSensitive;
    public UsernameConfigurationType withCaseSensitive(Boolean caseSensitive) {
        this.caseSensitive = caseSensitive;
        return this;
    }
}