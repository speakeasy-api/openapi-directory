package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OfficeOfficeOnlineHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("day")
    public Long day;
    public OfficeOfficeOnlineHours withDay(Long day) {
        this.day = day;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hour")
    public Long hour;
    public OfficeOfficeOnlineHours withHour(Long hour) {
        this.hour = hour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minute")
    public Long minute;
    public OfficeOfficeOnlineHours withMinute(Long minute) {
        this.minute = minute;
        return this;
    }
}