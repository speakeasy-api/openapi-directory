package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSchemaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public DatasetSchema schema;
    public DescribeSchemaResponse withSchema(DatasetSchema schema) {
        this.schema = schema;
        return this;
    }
}