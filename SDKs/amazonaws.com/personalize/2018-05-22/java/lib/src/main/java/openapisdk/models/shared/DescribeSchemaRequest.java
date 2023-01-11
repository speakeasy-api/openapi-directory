package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeSchemaRequest {
    @JsonProperty("schemaArn")
    public String schemaArn;
    public DescribeSchemaRequest withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
}