package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutOrdersIdStatusStatusTypeSimpleV2Status {
    @JsonProperty("code")
    public String code;
    public PutOrdersIdStatusStatusTypeSimpleV2Status withCode(String code) {
        this.code = code;
        return this;
    }
}