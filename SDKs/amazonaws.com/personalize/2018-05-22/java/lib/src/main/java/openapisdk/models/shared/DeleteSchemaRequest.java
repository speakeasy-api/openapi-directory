package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSchemaRequest {
    @JsonProperty("schemaArn")
    public String schemaArn;
    public DeleteSchemaRequest withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
}