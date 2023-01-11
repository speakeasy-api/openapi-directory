package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributesToGet")
    public String[] attributesToGet;
    public GetItemInput withAttributesToGet(String[] attributesToGet) {
        this.attributesToGet = attributesToGet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsistentRead")
    public Boolean consistentRead;
    public GetItemInput withConsistentRead(Boolean consistentRead) {
        this.consistentRead = consistentRead;
        return this;
    }
    @JsonProperty("Key")
    public Key key;
    public GetItemInput withKey(Key key) {
        this.key = key;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public GetItemInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}