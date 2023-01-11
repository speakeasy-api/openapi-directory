package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScanProvisionedProductsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public ScanProvisionedProductsInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessLevelFilter")
    public AccessLevelFilter accessLevelFilter;
    public ScanProvisionedProductsInput withAccessLevelFilter(AccessLevelFilter accessLevelFilter) {
        this.accessLevelFilter = accessLevelFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageSize")
    public Long pageSize;
    public ScanProvisionedProductsInput withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageToken")
    public String pageToken;
    public ScanProvisionedProductsInput withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}