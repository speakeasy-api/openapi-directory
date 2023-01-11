package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PersonRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar")
    public PersonRelationshipsAvatar avatar;
    public PersonRelationships withAvatar(PersonRelationshipsAvatar avatar) {
        this.avatar = avatar;
        return this;
    }
}