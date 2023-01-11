package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectEntitiesV2Response {
    @JsonProperty("Entities")
    public Entity[] entities;
    public DetectEntitiesV2Response withEntities(Entity[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonProperty("ModelVersion")
    public String modelVersion;
    public DetectEntitiesV2Response withModelVersion(String modelVersion) {
        this.modelVersion = modelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public DetectEntitiesV2Response withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnmappedAttributes")
    public UnmappedAttribute[] unmappedAttributes;
    public DetectEntitiesV2Response withUnmappedAttributes(UnmappedAttribute[] unmappedAttributes) {
        this.unmappedAttributes = unmappedAttributes;
        return this;
    }
}