package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunFailuresAssertion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status code is 400")
    public Boolean statusCodeIs400;
    public RunAMonitor200ApplicationJsonRunFailuresAssertion withStatusCodeIs400(Boolean statusCodeIs400) {
        this.statusCodeIs400 = statusCodeIs400;
        return this;
    }
}