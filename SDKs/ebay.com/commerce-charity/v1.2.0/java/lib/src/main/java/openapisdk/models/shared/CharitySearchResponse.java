package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CharitySearchResponse
 * A single set of search results, with information for accessing other sets.
**/
public class CharitySearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charityOrgs")
    public CharityOrg[] charityOrgs;
    public CharitySearchResponse withCharityOrgs(CharityOrg[] charityOrgs) {
        this.charityOrgs = charityOrgs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public CharitySearchResponse withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public CharitySearchResponse withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public CharitySearchResponse withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public CharitySearchResponse withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public CharitySearchResponse withPrev(String prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public CharitySearchResponse withTotal(Integer total) {
        this.total = total;
        return this;
    }
}