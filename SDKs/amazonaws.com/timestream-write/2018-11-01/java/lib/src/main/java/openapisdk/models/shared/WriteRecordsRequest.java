package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WriteRecordsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CommonAttributes")
    public Record commonAttributes;
    public WriteRecordsRequest withCommonAttributes(Record commonAttributes) {
        this.commonAttributes = commonAttributes;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public WriteRecordsRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("Records")
    public Record[] records;
    public WriteRecordsRequest withRecords(Record[] records) {
        this.records = records;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public WriteRecordsRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}