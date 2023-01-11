package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSessionInfoUsingGet200ApplicationJsonDataInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorID")
    public String authorID;
    public GetSessionInfoUsingGet200ApplicationJsonDataInfo withAuthorId(String authorID) {
        this.authorID = authorID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupID")
    public String groupID;
    public GetSessionInfoUsingGet200ApplicationJsonDataInfo withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetSessionInfoUsingGet200ApplicationJsonDataInfo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validUntil")
    public Long validUntil;
    public GetSessionInfoUsingGet200ApplicationJsonDataInfo withValidUntil(Long validUntil) {
        this.validUntil = validUntil;
        return this;
    }
}