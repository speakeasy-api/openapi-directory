package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetScalingPlanResourceForecastDataResponse {
    @JsonProperty("Datapoints")
    public Datapoint[] datapoints;
    public GetScalingPlanResourceForecastDataResponse withDatapoints(Datapoint[] datapoints) {
        this.datapoints = datapoints;
        return this;
    }
}