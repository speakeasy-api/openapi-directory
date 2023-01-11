package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LtiCredentialsCreation
 * Creation of a couple of LTI 1.x OAuth credentials
**/
public class LtiCredentialsCreation {
    @JsonProperty("lms")
    public LmsNameEnum lms;
    public LtiCredentialsCreation withLms(LmsNameEnum lms) {
        this.lms = lms;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public LtiCredentialsCreation withName(String name) {
        this.name = name;
        return this;
    }
}