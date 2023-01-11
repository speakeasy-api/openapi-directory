package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SitemapsReportOnly {
    @JsonProperty("in_configuration")
    public Long inConfiguration;
    public SitemapsReportOnly withInConfiguration(Long inConfiguration) {
        this.inConfiguration = inConfiguration;
        return this;
    }
    @JsonProperty("out_of_configuration")
    public Long outOfConfiguration;
    public SitemapsReportOnly withOutOfConfiguration(Long outOfConfiguration) {
        this.outOfConfiguration = outOfConfiguration;
        return this;
    }
}