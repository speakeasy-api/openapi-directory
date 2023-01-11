package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFacetRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeUpdates")
    public openapisdk.models.shared.FacetAttributeUpdate[] attributeUpdates;
    public UpdateFacetRequestBody withAttributeUpdates(openapisdk.models.shared.FacetAttributeUpdate[] attributeUpdates) {
        this.attributeUpdates = attributeUpdates;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateFacetRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectType")
    public UpdateFacetRequestBodyObjectTypeEnum objectType;
    public UpdateFacetRequestBody withObjectType(UpdateFacetRequestBodyObjectTypeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
}