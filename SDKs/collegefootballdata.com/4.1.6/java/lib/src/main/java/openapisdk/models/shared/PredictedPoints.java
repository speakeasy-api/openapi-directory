package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PredictedPoints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictedPoints")
    public Double predictedPoints;
    public PredictedPoints withPredictedPoints(Double predictedPoints) {
        this.predictedPoints = predictedPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yardLine")
    public Long yardLine;
    public PredictedPoints withYardLine(Long yardLine) {
        this.yardLine = yardLine;
        return this;
    }
}