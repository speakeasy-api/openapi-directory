package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSchemaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryName")
    public String registryName;
    public UpdateSchemaResponse withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaArn")
    public String schemaArn;
    public UpdateSchemaResponse withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaName")
    public String schemaName;
    public UpdateSchemaResponse withSchemaName(String schemaName) {
        this.schemaName = schemaName;
        return this;
    }
}