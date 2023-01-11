package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecificationRequestBodyInputPathsPetsGet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGet withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters[] parameters;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGet withParameters(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses responses;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGet withResponses(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses responses) {
        this.responses = responses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGet withSummary(String summary) {
        this.summary = summary;
        return this;
    }
}