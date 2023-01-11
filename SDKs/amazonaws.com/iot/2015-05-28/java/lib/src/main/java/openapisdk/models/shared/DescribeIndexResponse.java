package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeIndexResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexName")
    public String indexName;
    public DescribeIndexResponse withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexStatus")
    public IndexStatusEnum indexStatus;
    public DescribeIndexResponse withIndexStatus(IndexStatusEnum indexStatus) {
        this.indexStatus = indexStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public DescribeIndexResponse withSchema(String schema) {
        this.schema = schema;
        return this;
    }
}