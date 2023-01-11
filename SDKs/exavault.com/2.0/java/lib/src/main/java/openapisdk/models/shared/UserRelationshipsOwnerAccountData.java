package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserRelationshipsOwnerAccountData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public UserRelationshipsOwnerAccountData withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UserRelationshipsOwnerAccountDataTypeEnum type;
    public UserRelationshipsOwnerAccountData withType(UserRelationshipsOwnerAccountDataTypeEnum type) {
        this.type = type;
        return this;
    }
}