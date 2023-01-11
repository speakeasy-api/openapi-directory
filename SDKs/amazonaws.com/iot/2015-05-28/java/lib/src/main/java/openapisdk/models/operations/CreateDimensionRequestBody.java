package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDimensionRequestBody {
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateDimensionRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("stringValues")
    public String[] stringValues;
    public CreateDimensionRequestBody withStringValues(String[] stringValues) {
        this.stringValues = stringValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateDimensionRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public CreateDimensionRequestBodyTypeEnum type;
    public CreateDimensionRequestBody withType(CreateDimensionRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}