package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRecordHistoryInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public ListRecordHistoryInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessLevelFilter")
    public AccessLevelFilter accessLevelFilter;
    public ListRecordHistoryInput withAccessLevelFilter(AccessLevelFilter accessLevelFilter) {
        this.accessLevelFilter = accessLevelFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageSize")
    public Long pageSize;
    public ListRecordHistoryInput withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageToken")
    public String pageToken;
    public ListRecordHistoryInput withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SearchFilter")
    public ListRecordHistorySearchFilter searchFilter;
    public ListRecordHistoryInput withSearchFilter(ListRecordHistorySearchFilter searchFilter) {
        this.searchFilter = searchFilter;
        return this;
    }
}