package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailListOwnerUser
 * Information for user who owns the email list
**/
public class EmailListOwnerUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public RelationshipData data;
    public EmailListOwnerUser withData(RelationshipData data) {
        this.data = data;
        return this;
    }
}