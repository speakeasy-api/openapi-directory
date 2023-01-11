package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorID")
    public String authorID;
    public ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions withAuthorId(String authorID) {
        this.authorID = authorID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupID")
    public String groupID;
    public ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validUntil")
    public Long validUntil;
    public ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions withValidUntil(Long validUntil) {
        this.validUntil = validUntil;
        return this;
    }
}