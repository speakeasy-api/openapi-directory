package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CategoryDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PointsOfInterest")
    public PointOfInterest[] pointsOfInterest;
    public CategoryDetails withPointsOfInterest(PointOfInterest[] pointsOfInterest) {
        this.pointsOfInterest = pointsOfInterest;
        return this;
    }
}