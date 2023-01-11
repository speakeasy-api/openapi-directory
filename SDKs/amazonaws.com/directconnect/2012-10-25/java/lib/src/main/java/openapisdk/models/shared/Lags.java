package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Lags {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lags")
    public Lag[] lags;
    public Lags withLags(Lag[] lags) {
        this.lags = lags;
        return this;
    }
}