package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage withType(String type) {
        this.type = type;
        return this;
    }
}