package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetObjectAttributes
 * Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchGetObjectAttributes {
    @JsonProperty("AttributeNames")
    public String[] attributeNames;
    public BatchGetObjectAttributes withAttributeNames(String[] attributeNames) {
        this.attributeNames = attributeNames;
        return this;
    }
    @JsonProperty("ObjectReference")
    public ObjectReference objectReference;
    public BatchGetObjectAttributes withObjectReference(ObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
    @JsonProperty("SchemaFacet")
    public SchemaFacet schemaFacet;
    public BatchGetObjectAttributes withSchemaFacet(SchemaFacet schemaFacet) {
        this.schemaFacet = schemaFacet;
        return this;
    }
}