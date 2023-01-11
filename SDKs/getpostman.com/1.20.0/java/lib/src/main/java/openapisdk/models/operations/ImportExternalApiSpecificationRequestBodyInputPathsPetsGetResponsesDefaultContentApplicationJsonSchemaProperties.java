package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode code;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties withCode(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage message;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties withMessage(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage message) {
        this.message = message;
        return this;
    }
}