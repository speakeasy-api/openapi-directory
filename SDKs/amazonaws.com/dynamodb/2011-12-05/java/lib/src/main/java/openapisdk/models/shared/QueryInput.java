package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributesToGet")
    public String[] attributesToGet;
    public QueryInput withAttributesToGet(String[] attributesToGet) {
        this.attributesToGet = attributesToGet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsistentRead")
    public Boolean consistentRead;
    public QueryInput withConsistentRead(Boolean consistentRead) {
        this.consistentRead = consistentRead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Boolean count;
    public QueryInput withCount(Boolean count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusiveStartKey")
    public Key exclusiveStartKey;
    public QueryInput withExclusiveStartKey(Key exclusiveStartKey) {
        this.exclusiveStartKey = exclusiveStartKey;
        return this;
    }
    @JsonProperty("HashKeyValue")
    public AttributeValue hashKeyValue;
    public QueryInput withHashKeyValue(AttributeValue hashKeyValue) {
        this.hashKeyValue = hashKeyValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public QueryInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RangeKeyCondition")
    public Condition rangeKeyCondition;
    public QueryInput withRangeKeyCondition(Condition rangeKeyCondition) {
        this.rangeKeyCondition = rangeKeyCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScanIndexForward")
    public Boolean scanIndexForward;
    public QueryInput withScanIndexForward(Boolean scanIndexForward) {
        this.scanIndexForward = scanIndexForward;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public QueryInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}