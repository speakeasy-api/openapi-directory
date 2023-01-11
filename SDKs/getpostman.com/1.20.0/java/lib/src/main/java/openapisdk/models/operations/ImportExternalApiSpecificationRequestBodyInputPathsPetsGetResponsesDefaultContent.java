package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application/json")
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson applicationJson;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent withApplicationJson(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson applicationJson) {
        this.applicationJson = applicationJson;
        return this;
    }
}