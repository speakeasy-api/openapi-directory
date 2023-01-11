package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportByDay {
    @JsonProperty("allChannels")
    public ReportByDayAllChannels allChannels;
    public ReportByDay withAllChannels(ReportByDayAllChannels allChannels) {
        this.allChannels = allChannels;
        return this;
    }
    @JsonProperty("byChannels")
    public ReportByDayByChannel[] byChannels;
    public ReportByDay withByChannels(ReportByDayByChannel[] byChannels) {
        this.byChannels = byChannels;
        return this;
    }
    @JsonProperty("day")
    public LocalDate day;
    public ReportByDay withDay(LocalDate day) {
        this.day = day;
        return this;
    }
}