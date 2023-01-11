package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLinkAttributesRequestBody {
    @JsonProperty("AttributeNames")
    public String[] attributeNames;
    public GetLinkAttributesRequestBody withAttributeNames(String[] attributeNames) {
        this.attributeNames = attributeNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsistencyLevel")
    public GetLinkAttributesRequestBodyConsistencyLevelEnum consistencyLevel;
    public GetLinkAttributesRequestBody withConsistencyLevel(GetLinkAttributesRequestBodyConsistencyLevelEnum consistencyLevel) {
        this.consistencyLevel = consistencyLevel;
        return this;
    }
    @JsonProperty("TypedLinkSpecifier")
    public GetLinkAttributesRequestBodyTypedLinkSpecifier typedLinkSpecifier;
    public GetLinkAttributesRequestBody withTypedLinkSpecifier(GetLinkAttributesRequestBodyTypedLinkSpecifier typedLinkSpecifier) {
        this.typedLinkSpecifier = typedLinkSpecifier;
        return this;
    }
}