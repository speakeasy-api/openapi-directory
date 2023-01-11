package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FetchPageResult
 * Contains the page that was fetched.
**/
public class FetchPageResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumedIOs")
    public IoUsage consumedIOs;
    public FetchPageResult withConsumedIOs(IoUsage consumedIOs) {
        this.consumedIOs = consumedIOs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Page")
    public Page page;
    public FetchPageResult withPage(Page page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimingInformation")
    public TimingInformation timingInformation;
    public FetchPageResult withTimingInformation(TimingInformation timingInformation) {
        this.timingInformation = timingInformation;
        return this;
    }
}