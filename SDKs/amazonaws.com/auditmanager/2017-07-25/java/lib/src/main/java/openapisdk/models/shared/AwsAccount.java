package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsAccount
 *  The wrapper of account details, such as account ID, email address, and so on. 
**/
public class AwsAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public AwsAccount withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AwsAccount withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AwsAccount withName(String name) {
        this.name = name;
        return this;
    }
}