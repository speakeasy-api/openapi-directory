package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonRelationshipsAvatar
 * The avatar or head shot of the person. Details can be retrieved using the `/images` endpoint.
 * 
**/
public class PersonRelationshipsAvatar {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier data;
    public PersonRelationshipsAvatar withData(ResourceIdentifier data) {
        this.data = data;
        return this;
    }
}