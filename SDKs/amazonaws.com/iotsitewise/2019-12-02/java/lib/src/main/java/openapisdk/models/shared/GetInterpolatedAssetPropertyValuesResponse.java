package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInterpolatedAssetPropertyValuesResponse {
    @JsonProperty("interpolatedAssetPropertyValues")
    public InterpolatedAssetPropertyValue[] interpolatedAssetPropertyValues;
    public GetInterpolatedAssetPropertyValuesResponse withInterpolatedAssetPropertyValues(InterpolatedAssetPropertyValue[] interpolatedAssetPropertyValues) {
        this.interpolatedAssetPropertyValues = interpolatedAssetPropertyValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetInterpolatedAssetPropertyValuesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}