package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailListRelationships
 * Related record summary info
**/
public class EmailListRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerUser")
    public EmailListOwnerUser ownerUser;
    public EmailListRelationships withOwnerUser(EmailListOwnerUser ownerUser) {
        this.ownerUser = ownerUser;
        return this;
    }
}