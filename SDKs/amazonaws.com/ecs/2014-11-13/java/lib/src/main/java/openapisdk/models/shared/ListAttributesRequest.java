package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAttributesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeName")
    public String attributeName;
    public ListAttributesRequest withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeValue")
    public String attributeValue;
    public ListAttributesRequest withAttributeValue(String attributeValue) {
        this.attributeValue = attributeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public ListAttributesRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListAttributesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAttributesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("targetType")
    public TargetTypeEnum targetType;
    public ListAttributesRequest withTargetType(TargetTypeEnum targetType) {
        this.targetType = targetType;
        return this;
    }
}