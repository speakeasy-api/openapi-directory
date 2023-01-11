package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema schema;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson withSchema(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema schema) {
        this.schema = schema;
        return this;
    }
}