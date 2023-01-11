package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default")
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault default_;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses withDefault(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault default_) {
        this.default_ = default_;
        return this;
    }
}