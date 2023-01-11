package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFilterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public Filter filter;
    public DescribeFilterResponse withFilter(Filter filter) {
        this.filter = filter;
        return this;
    }
}