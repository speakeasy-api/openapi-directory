package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * PlacementDescription
 * An object describing a project's placement.
**/
public class PlacementDescription {
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public PlacementDescription withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdDate")
    public OffsetDateTime createdDate;
    public PlacementDescription withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonProperty("placementName")
    public String placementName;
    public PlacementDescription withPlacementName(String placementName) {
        this.placementName = placementName;
        return this;
    }
    @JsonProperty("projectName")
    public String projectName;
    public PlacementDescription withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updatedDate")
    public OffsetDateTime updatedDate;
    public PlacementDescription withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}