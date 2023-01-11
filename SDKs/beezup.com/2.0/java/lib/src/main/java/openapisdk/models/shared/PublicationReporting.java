package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PublicationReporting
 * Model for a publication reporting, can have multiple feeds
**/
public class PublicationReporting {
    @JsonProperty("feeds")
    public PublicationFeedReporting[] feeds;
    public PublicationReporting withFeeds(PublicationFeedReporting[] feeds) {
        this.feeds = feeds;
        return this;
    }
    @JsonProperty("publicationType")
    public PublicationTypeEnum publicationType;
    public PublicationReporting withPublicationType(PublicationTypeEnum publicationType) {
        this.publicationType = publicationType;
        return this;
    }
}