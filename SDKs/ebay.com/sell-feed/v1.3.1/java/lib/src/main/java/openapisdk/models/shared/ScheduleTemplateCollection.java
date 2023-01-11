package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScheduleTemplateCollection
 * The type that defines the fields for a paginated result set of schedule templates. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
public class ScheduleTemplateCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public ScheduleTemplateCollection withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public ScheduleTemplateCollection withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public ScheduleTemplateCollection withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public ScheduleTemplateCollection withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public ScheduleTemplateCollection withPrev(String prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTemplates")
    public ScheduleTemplateResponse[] scheduleTemplates;
    public ScheduleTemplateCollection withScheduleTemplates(ScheduleTemplateResponse[] scheduleTemplates) {
        this.scheduleTemplates = scheduleTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public ScheduleTemplateCollection withTotal(Integer total) {
        this.total = total;
        return this;
    }
}