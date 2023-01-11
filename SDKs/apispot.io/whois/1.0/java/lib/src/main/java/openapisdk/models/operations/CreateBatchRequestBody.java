package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchRequestBody {
    @JsonProperty("domains")
    public String[] domains;
    public CreateBatchRequestBody withDomains(String[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonProperty("operation")
    public CreateBatchRequestBodyOperationEnum operation;
    public CreateBatchRequestBody withOperation(CreateBatchRequestBodyOperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public CreateBatchRequestBodyOptions options;
    public CreateBatchRequestBody withOptions(CreateBatchRequestBodyOptions options) {
        this.options = options;
        return this;
    }
}