package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListOfAspspsAspsps {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspsps")
    public GetListOfAspspsAspspsAspsp[] aspsps;
    public GetListOfAspspsAspsps withAspsps(GetListOfAspspsAspspsAspsp[] aspsps) {
        this.aspsps = aspsps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public GetListOfAspspsAspsps withTotal(Long total) {
        this.total = total;
        return this;
    }
}