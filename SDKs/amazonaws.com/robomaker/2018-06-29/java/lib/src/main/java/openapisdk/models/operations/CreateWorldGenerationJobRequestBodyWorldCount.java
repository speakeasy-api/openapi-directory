package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateWorldGenerationJobRequestBodyWorldCount
 * <p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>
**/
public class CreateWorldGenerationJobRequestBodyWorldCount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floorplanCount")
    public Long floorplanCount;
    public CreateWorldGenerationJobRequestBodyWorldCount withFloorplanCount(Long floorplanCount) {
        this.floorplanCount = floorplanCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interiorCountPerFloorplan")
    public Long interiorCountPerFloorplan;
    public CreateWorldGenerationJobRequestBodyWorldCount withInteriorCountPerFloorplan(Long interiorCountPerFloorplan) {
        this.interiorCountPerFloorplan = interiorCountPerFloorplan;
        return this;
    }
}