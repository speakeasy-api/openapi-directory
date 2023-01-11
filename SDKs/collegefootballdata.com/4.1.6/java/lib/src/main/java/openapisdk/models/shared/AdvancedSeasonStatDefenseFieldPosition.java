package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdvancedSeasonStatDefenseFieldPosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averagePredictedPoints")
    public Double averagePredictedPoints;
    public AdvancedSeasonStatDefenseFieldPosition withAveragePredictedPoints(Double averagePredictedPoints) {
        this.averagePredictedPoints = averagePredictedPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageStart")
    public Double averageStart;
    public AdvancedSeasonStatDefenseFieldPosition withAverageStart(Double averageStart) {
        this.averageStart = averageStart;
        return this;
    }
}