package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConnectionLoaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loa")
    public Loa loa;
    public DescribeConnectionLoaResponse withLoa(Loa loa) {
        this.loa = loa;
        return this;
    }
}