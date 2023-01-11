package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectionSchedule
 * if null, then no schedule is set.
**/
public class ConnectionSchedule {
    @JsonProperty("timeUnit")
    public ConnectionScheduleTimeUnitEnum timeUnit;
    public ConnectionSchedule withTimeUnit(ConnectionScheduleTimeUnitEnum timeUnit) {
        this.timeUnit = timeUnit;
        return this;
    }
    @JsonProperty("units")
    public Long units;
    public ConnectionSchedule withUnits(Long units) {
        this.units = units;
        return this;
    }
}