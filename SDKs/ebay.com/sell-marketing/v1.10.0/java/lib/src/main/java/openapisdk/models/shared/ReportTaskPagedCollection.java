package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportTaskPagedCollection
 * This type defines the fields that paginate the reports tasks returned by the request. The entire result set consists of 0 or more sequenced response pages, where each page consists of 0 or more items from the complete result set.
**/
public class ReportTaskPagedCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public ReportTaskPagedCollection withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public ReportTaskPagedCollection withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public ReportTaskPagedCollection withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public ReportTaskPagedCollection withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public ReportTaskPagedCollection withPrev(String prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTasks")
    public ReportTask[] reportTasks;
    public ReportTaskPagedCollection withReportTasks(ReportTask[] reportTasks) {
        this.reportTasks = reportTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public ReportTaskPagedCollection withTotal(Integer total) {
        this.total = total;
        return this;
    }
}