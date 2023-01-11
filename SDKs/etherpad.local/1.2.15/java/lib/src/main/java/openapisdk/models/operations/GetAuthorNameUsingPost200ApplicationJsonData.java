package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAuthorNameUsingPost200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public GetAuthorNameUsingPost200ApplicationJsonDataInfo info;
    public GetAuthorNameUsingPost200ApplicationJsonData withInfo(GetAuthorNameUsingPost200ApplicationJsonDataInfo info) {
        this.info = info;
        return this;
    }
}