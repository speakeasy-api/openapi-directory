package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchRequestBodyOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public CreateBatchRequestBodyOptionsFormatEnum format;
    public CreateBatchRequestBodyOptions withFormat(CreateBatchRequestBodyOptionsFormatEnum format) {
        this.format = format;
        return this;
    }
}