package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProvisionedProductPlansInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public ListProvisionedProductPlansInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessLevelFilter")
    public AccessLevelFilter accessLevelFilter;
    public ListProvisionedProductPlansInput withAccessLevelFilter(AccessLevelFilter accessLevelFilter) {
        this.accessLevelFilter = accessLevelFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageSize")
    public Long pageSize;
    public ListProvisionedProductPlansInput withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageToken")
    public String pageToken;
    public ListProvisionedProductPlansInput withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionProductId")
    public String provisionProductId;
    public ListProvisionedProductPlansInput withProvisionProductId(String provisionProductId) {
        this.provisionProductId = provisionProductId;
        return this;
    }
}