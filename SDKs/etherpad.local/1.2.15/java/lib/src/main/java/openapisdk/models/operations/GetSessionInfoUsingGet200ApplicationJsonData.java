package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSessionInfoUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public GetSessionInfoUsingGet200ApplicationJsonDataInfo info;
    public GetSessionInfoUsingGet200ApplicationJsonData withInfo(GetSessionInfoUsingGet200ApplicationJsonDataInfo info) {
        this.info = info;
        return this;
    }
}