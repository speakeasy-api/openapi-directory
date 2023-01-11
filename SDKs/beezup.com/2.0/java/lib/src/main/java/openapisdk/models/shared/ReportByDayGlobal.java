package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportByDayGlobal {
    @JsonProperty("allChannels")
    public ReportByDayGlobalAllChannels allChannels;
    public ReportByDayGlobal withAllChannels(ReportByDayGlobalAllChannels allChannels) {
        this.allChannels = allChannels;
        return this;
    }
    @JsonProperty("byChannels")
    public ReportByDayGlobalByChannel[] byChannels;
    public ReportByDayGlobal withByChannels(ReportByDayGlobalByChannel[] byChannels) {
        this.byChannels = byChannels;
        return this;
    }
}