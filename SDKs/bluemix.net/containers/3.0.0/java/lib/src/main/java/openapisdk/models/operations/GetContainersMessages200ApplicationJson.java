package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContainersMessages200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public GetContainersMessages200ApplicationJson withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GetContainersMessages200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}