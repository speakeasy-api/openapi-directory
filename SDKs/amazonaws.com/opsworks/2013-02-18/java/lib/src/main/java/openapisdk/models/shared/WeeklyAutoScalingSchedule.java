package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WeeklyAutoScalingSchedule
 * <p>Describes a time-based instance's auto scaling schedule. The schedule consists of a set of key-value pairs.</p> <ul> <li> <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p> </li> <li> <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p> </li> </ul> <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don't have to explicitly specify offline periods unless you want to change an online period to an offline period.</p> <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p> <p> <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code> </p>
**/
public class WeeklyAutoScalingSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Friday")
    public java.util.Map<String, String> friday;
    public WeeklyAutoScalingSchedule withFriday(java.util.Map<String, String> friday) {
        this.friday = friday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Monday")
    public java.util.Map<String, String> monday;
    public WeeklyAutoScalingSchedule withMonday(java.util.Map<String, String> monday) {
        this.monday = monday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Saturday")
    public java.util.Map<String, String> saturday;
    public WeeklyAutoScalingSchedule withSaturday(java.util.Map<String, String> saturday) {
        this.saturday = saturday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sunday")
    public java.util.Map<String, String> sunday;
    public WeeklyAutoScalingSchedule withSunday(java.util.Map<String, String> sunday) {
        this.sunday = sunday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Thursday")
    public java.util.Map<String, String> thursday;
    public WeeklyAutoScalingSchedule withThursday(java.util.Map<String, String> thursday) {
        this.thursday = thursday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tuesday")
    public java.util.Map<String, String> tuesday;
    public WeeklyAutoScalingSchedule withTuesday(java.util.Map<String, String> tuesday) {
        this.tuesday = tuesday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Wednesday")
    public java.util.Map<String, String> wednesday;
    public WeeklyAutoScalingSchedule withWednesday(java.util.Map<String, String> wednesday) {
        this.wednesday = wednesday;
        return this;
    }
}