package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAuthorNameUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public GetAuthorNameUsingGet200ApplicationJsonDataInfo info;
    public GetAuthorNameUsingGet200ApplicationJsonData withInfo(GetAuthorNameUsingGet200ApplicationJsonDataInfo info) {
        this.info = info;
        return this;
    }
}