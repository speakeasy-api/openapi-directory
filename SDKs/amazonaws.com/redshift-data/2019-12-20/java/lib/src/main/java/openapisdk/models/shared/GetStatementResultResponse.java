package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStatementResultResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnMetadata")
    public ColumnMetadata[] columnMetadata;
    public GetStatementResultResponse withColumnMetadata(ColumnMetadata[] columnMetadata) {
        this.columnMetadata = columnMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetStatementResultResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("Records")
    public Field[][] records;
    public GetStatementResultResponse withRecords(Field[][] records) {
        this.records = records;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalNumRows")
    public Long totalNumRows;
    public GetStatementResultResponse withTotalNumRows(Long totalNumRows) {
        this.totalNumRows = totalNumRows;
        return this;
    }
}