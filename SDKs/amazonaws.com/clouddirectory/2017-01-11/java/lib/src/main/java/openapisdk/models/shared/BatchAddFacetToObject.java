package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchAddFacetToObject
 * Represents the output of a batch add facet to object operation.
**/
public class BatchAddFacetToObject {
    @JsonProperty("ObjectAttributeList")
    public AttributeKeyAndValue[] objectAttributeList;
    public BatchAddFacetToObject withObjectAttributeList(AttributeKeyAndValue[] objectAttributeList) {
        this.objectAttributeList = objectAttributeList;
        return this;
    }
    @JsonProperty("ObjectReference")
    public ObjectReference objectReference;
    public BatchAddFacetToObject withObjectReference(ObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
    @JsonProperty("SchemaFacet")
    public SchemaFacet schemaFacet;
    public BatchAddFacetToObject withSchemaFacet(SchemaFacet schemaFacet) {
        this.schemaFacet = schemaFacet;
        return this;
    }
}