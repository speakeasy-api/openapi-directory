package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSessionInfoUsingPost200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public GetSessionInfoUsingPost200ApplicationJsonDataInfo info;
    public GetSessionInfoUsingPost200ApplicationJsonData withInfo(GetSessionInfoUsingPost200ApplicationJsonDataInfo info) {
        this.info = info;
        return this;
    }
}