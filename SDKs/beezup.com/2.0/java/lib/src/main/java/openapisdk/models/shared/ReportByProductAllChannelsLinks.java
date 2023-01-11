package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportByProductAllChannelsLinks {
    @JsonProperty("disableProductForAllChannels")
    public LinksOptimiseByProductLink disableProductForAllChannels;
    public ReportByProductAllChannelsLinks withDisableProductForAllChannels(LinksOptimiseByProductLink disableProductForAllChannels) {
        this.disableProductForAllChannels = disableProductForAllChannels;
        return this;
    }
    @JsonProperty("enableProductForAllChannels")
    public LinksOptimiseByProductLink enableProductForAllChannels;
    public ReportByProductAllChannelsLinks withEnableProductForAllChannels(LinksOptimiseByProductLink enableProductForAllChannels) {
        this.enableProductForAllChannels = enableProductForAllChannels;
        return this;
    }
}