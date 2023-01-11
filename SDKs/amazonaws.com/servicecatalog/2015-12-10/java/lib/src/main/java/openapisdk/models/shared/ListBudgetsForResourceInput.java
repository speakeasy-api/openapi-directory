package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBudgetsForResourceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public ListBudgetsForResourceInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageSize")
    public Long pageSize;
    public ListBudgetsForResourceInput withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageToken")
    public String pageToken;
    public ListBudgetsForResourceInput withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public ListBudgetsForResourceInput withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}