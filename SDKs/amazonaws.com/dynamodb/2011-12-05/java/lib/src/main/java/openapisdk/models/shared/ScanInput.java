package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScanInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributesToGet")
    public String[] attributesToGet;
    public ScanInput withAttributesToGet(String[] attributesToGet) {
        this.attributesToGet = attributesToGet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Boolean count;
    public ScanInput withCount(Boolean count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusiveStartKey")
    public Key exclusiveStartKey;
    public ScanInput withExclusiveStartKey(Key exclusiveStartKey) {
        this.exclusiveStartKey = exclusiveStartKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ScanInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScanFilter")
    public java.util.Map<String, Condition> scanFilter;
    public ScanInput withScanFilter(java.util.Map<String, Condition> scanFilter) {
        this.scanFilter = scanFilter;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public ScanInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}