package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserRelationshipsHomeResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public UserRelationshipsHomeResourceData data;
    public UserRelationshipsHomeResource withData(UserRelationshipsHomeResourceData data) {
        this.data = data;
        return this;
    }
}