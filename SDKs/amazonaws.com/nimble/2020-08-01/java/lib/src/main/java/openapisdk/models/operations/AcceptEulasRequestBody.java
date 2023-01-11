package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AcceptEulasRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eulaIds")
    public String[] eulaIds;
    public AcceptEulasRequestBody withEulaIds(String[] eulaIds) {
        this.eulaIds = eulaIds;
        return this;
    }
}