package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Schedule {
    @JsonProperty("end_date")
    public String endDate;
    public Schedule withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Schedule withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("start_date")
    public String startDate;
    public Schedule withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonProperty("work_pattern")
    public ScheduleWorkPattern workPattern;
    public Schedule withWorkPattern(ScheduleWorkPattern workPattern) {
        this.workPattern = workPattern;
        return this;
    }
}