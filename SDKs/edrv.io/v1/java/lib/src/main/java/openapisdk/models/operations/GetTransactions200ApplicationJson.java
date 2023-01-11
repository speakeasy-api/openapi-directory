package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTransactions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasNext")
    public Boolean hasNext;
    public GetTransactions200ApplicationJson withHasNext(Boolean hasNext) {
        this.hasNext = hasNext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasPrevious")
    public Boolean hasPrevious;
    public GetTransactions200ApplicationJson withHasPrevious(Boolean hasPrevious) {
        this.hasPrevious = hasPrevious;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GetTransactions200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ok")
    public Boolean ok;
    public GetTransactions200ApplicationJson withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Object[] result;
    public GetTransactions200ApplicationJson withResult(Object[] result) {
        this.result = result;
        return this;
    }
}