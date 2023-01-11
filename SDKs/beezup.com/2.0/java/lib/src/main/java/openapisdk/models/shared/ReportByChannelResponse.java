package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportByChannelResponse {
    @JsonProperty("channels")
    public ReportByChannel[] channels;
    public ReportByChannelResponse withChannels(ReportByChannel[] channels) {
        this.channels = channels;
        return this;
    }
    @JsonProperty("currencyCode")
    public String currencyCode;
    public ReportByChannelResponse withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("links")
    public ReportByCommonResponseLinks links;
    public ReportByChannelResponse withLinks(ReportByCommonResponseLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("paginationResult")
    public BeezUpCommonPaginationResult paginationResult;
    public ReportByChannelResponse withPaginationResult(BeezUpCommonPaginationResult paginationResult) {
        this.paginationResult = paginationResult;
        return this;
    }
}