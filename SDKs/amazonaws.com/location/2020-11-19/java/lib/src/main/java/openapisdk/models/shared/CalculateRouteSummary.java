package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CalculateRouteSummary
 * A summary of the calculated route.
**/
public class CalculateRouteSummary {
    @JsonProperty("DataSource")
    public String dataSource;
    public CalculateRouteSummary withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonProperty("Distance")
    public Double distance;
    public CalculateRouteSummary withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    @JsonProperty("DistanceUnit")
    public DistanceUnitEnum distanceUnit;
    public CalculateRouteSummary withDistanceUnit(DistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    @JsonProperty("DurationSeconds")
    public Double durationSeconds;
    public CalculateRouteSummary withDurationSeconds(Double durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    @JsonProperty("RouteBBox")
    public Double[] routeBBox;
    public CalculateRouteSummary withRouteBBox(Double[] routeBBox) {
        this.routeBBox = routeBBox;
        return this;
    }
}