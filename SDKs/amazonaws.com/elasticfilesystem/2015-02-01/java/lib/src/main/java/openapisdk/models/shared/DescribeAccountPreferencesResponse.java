package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAccountPreferencesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeAccountPreferencesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceIdPreference")
    public ResourceIdPreference resourceIdPreference;
    public DescribeAccountPreferencesResponse withResourceIdPreference(ResourceIdPreference resourceIdPreference) {
        this.resourceIdPreference = resourceIdPreference;
        return this;
    }
}