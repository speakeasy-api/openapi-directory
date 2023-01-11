package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beezUPOffer")
    public String beezUPOffer;
    public ChannelInfo withBeezUpOffer(String beezUPOffer) {
        this.beezUPOffer = beezUPOffer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelDescription")
    public String channelDescription;
    public ChannelInfo withChannelDescription(String channelDescription) {
        this.channelDescription = channelDescription;
        return this;
    }
    @JsonProperty("channelId")
    public String channelId;
    public ChannelInfo withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelLogoUrl")
    public String channelLogoUrl;
    public ChannelInfo withChannelLogoUrl(String channelLogoUrl) {
        this.channelLogoUrl = channelLogoUrl;
        return this;
    }
    @JsonProperty("channelName")
    public String channelName;
    public ChannelInfo withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public ChannelInfoDetails details;
    public ChannelInfo withDetails(ChannelInfoDetails details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyNumbers")
    public ChannelInfoKeyNumbers keyNumbers;
    public ChannelInfo withKeyNumbers(ChannelInfoKeyNumbers keyNumbers) {
        this.keyNumbers = keyNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesContact")
    public ChannelInfoSalesContact salesContact;
    public ChannelInfo withSalesContact(ChannelInfoSalesContact salesContact) {
        this.salesContact = salesContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technicalContact")
    public ChannelInfoTechnicalContact technicalContact;
    public ChannelInfo withTechnicalContact(ChannelInfoTechnicalContact technicalContact) {
        this.technicalContact = technicalContact;
        return this;
    }
}