package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Landmark
 * Indicates the location of the landmark on the face.
**/
public class Landmark {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public LandmarkTypeEnum type;
    public Landmark withType(LandmarkTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("X")
    public Float x;
    public Landmark withX(Float x) {
        this.x = x;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Y")
    public Float y;
    public Landmark withY(Float y) {
        this.y = y;
        return this;
    }
}