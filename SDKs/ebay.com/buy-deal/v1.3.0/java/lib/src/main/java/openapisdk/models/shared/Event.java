package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Event
 * The result set for the event search.
**/
public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicableCoupons")
    public Coupon[] applicableCoupons;
    public Event withApplicableCoupons(Coupon[] applicableCoupons) {
        this.applicableCoupons = applicableCoupons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Event withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public Event withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventAffiliateWebUrl")
    public String eventAffiliateWebUrl;
    public Event withEventAffiliateWebUrl(String eventAffiliateWebUrl) {
        this.eventAffiliateWebUrl = eventAffiliateWebUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventId")
    public String eventId;
    public Event withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventWebUrl")
    public String eventWebUrl;
    public Event withEventWebUrl(String eventWebUrl) {
        this.eventWebUrl = eventWebUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public Image[] images;
    public Event withImages(Image[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public Event withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public Terms terms;
    public Event withTerms(Terms terms) {
        this.terms = terms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Event withTitle(String title) {
        this.title = title;
        return this;
    }
}