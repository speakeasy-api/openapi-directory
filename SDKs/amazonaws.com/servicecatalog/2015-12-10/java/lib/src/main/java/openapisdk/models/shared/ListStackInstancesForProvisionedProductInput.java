package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListStackInstancesForProvisionedProductInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public ListStackInstancesForProvisionedProductInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageSize")
    public Long pageSize;
    public ListStackInstancesForProvisionedProductInput withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageToken")
    public String pageToken;
    public ListStackInstancesForProvisionedProductInput withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonProperty("ProvisionedProductId")
    public String provisionedProductId;
    public ListStackInstancesForProvisionedProductInput withProvisionedProductId(String provisionedProductId) {
        this.provisionedProductId = provisionedProductId;
        return this;
    }
}