package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutOrdersIdStatusStatusTypeSimpleV2 {
    @JsonProperty("reason")
    public String reason;
    public PutOrdersIdStatusStatusTypeSimpleV2 withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("status")
    public PutOrdersIdStatusStatusTypeSimpleV2Status status;
    public PutOrdersIdStatusStatusTypeSimpleV2 withStatus(PutOrdersIdStatusStatusTypeSimpleV2Status status) {
        this.status = status;
        return this;
    }
}