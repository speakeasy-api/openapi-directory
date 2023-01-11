package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRecordsFormat200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facets")
    public java.util.Map<String, java.util.Map<String, Long>> facets;
    public GetRecordsFormat200ApplicationJson withFacets(java.util.Map<String, java.util.Map<String, Long>> facets) {
        this.facets = facets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public GetRecordsFormat200ApplicationJson withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public GetRecordsFormat200ApplicationJson withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("records")
    public openapisdk.models.shared.Record[] records;
    public GetRecordsFormat200ApplicationJson withRecords(openapisdk.models.shared.Record[] records) {
        this.records = records;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_url")
    public String requestUrl;
    public GetRecordsFormat200ApplicationJson withRequestUrl(String requestUrl) {
        this.requestUrl = requestUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result_count")
    public Long resultCount;
    public GetRecordsFormat200ApplicationJson withResultCount(Long resultCount) {
        this.resultCount = resultCount;
        return this;
    }
}