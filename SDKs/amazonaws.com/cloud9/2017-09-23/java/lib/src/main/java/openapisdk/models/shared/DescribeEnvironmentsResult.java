package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeEnvironmentsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public Environment[] environments;
    public DescribeEnvironmentsResult withEnvironments(Environment[] environments) {
        this.environments = environments;
        return this;
    }
}