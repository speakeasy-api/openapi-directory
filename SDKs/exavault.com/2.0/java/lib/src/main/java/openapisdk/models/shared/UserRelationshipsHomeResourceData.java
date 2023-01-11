package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserRelationshipsHomeResourceData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public UserRelationshipsHomeResourceData withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UserRelationshipsHomeResourceDataTypeEnum type;
    public UserRelationshipsHomeResourceData withType(UserRelationshipsHomeResourceDataTypeEnum type) {
        this.type = type;
        return this;
    }
}