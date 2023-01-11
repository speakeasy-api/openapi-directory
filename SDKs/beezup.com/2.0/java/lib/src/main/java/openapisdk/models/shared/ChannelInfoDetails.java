package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelInfoDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessModel")
    public String businessModel;
    public ChannelInfoDetails withBusinessModel(String businessModel) {
        this.businessModel = businessModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public ChannelInfoDetails withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelType")
    public String channelType;
    public ChannelInfoDetails withChannelType(String channelType) {
        this.channelType = channelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costs")
    public String costs;
    public ChannelInfoDetails withCosts(String costs) {
        this.costs = costs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeUrl")
    public String homeUrl;
    public ChannelInfoDetails withHomeUrl(String homeUrl) {
        this.homeUrl = homeUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionLink")
    public String subscriptionLink;
    public ChannelInfoDetails withSubscriptionLink(String subscriptionLink) {
        this.subscriptionLink = subscriptionLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingType")
    public String trackingType;
    public ChannelInfoDetails withTrackingType(String trackingType) {
        this.trackingType = trackingType;
        return this;
    }
}