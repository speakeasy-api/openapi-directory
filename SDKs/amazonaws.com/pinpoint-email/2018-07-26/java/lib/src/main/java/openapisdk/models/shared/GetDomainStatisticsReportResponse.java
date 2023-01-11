package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDomainStatisticsReportResponse
 * An object that includes statistics that are related to the domain that you specified.
**/
public class GetDomainStatisticsReportResponse {
    @JsonProperty("DailyVolumes")
    public DailyVolume[] dailyVolumes;
    public GetDomainStatisticsReportResponse withDailyVolumes(DailyVolume[] dailyVolumes) {
        this.dailyVolumes = dailyVolumes;
        return this;
    }
    @JsonProperty("OverallVolume")
    public OverallVolume overallVolume;
    public GetDomainStatisticsReportResponse withOverallVolume(OverallVolume overallVolume) {
        this.overallVolume = overallVolume;
        return this;
    }
}