package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWorkflowTypesInput {
    @JsonProperty("domain")
    public String domain;
    public ListWorkflowTypesInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPageSize")
    public Long maximumPageSize;
    public ListWorkflowTypesInput withMaximumPageSize(Long maximumPageSize) {
        this.maximumPageSize = maximumPageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListWorkflowTypesInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListWorkflowTypesInput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonProperty("registrationStatus")
    public RegistrationStatusEnum registrationStatus;
    public ListWorkflowTypesInput withRegistrationStatus(RegistrationStatusEnum registrationStatus) {
        this.registrationStatus = registrationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverseOrder")
    public Boolean reverseOrder;
    public ListWorkflowTypesInput withReverseOrder(Boolean reverseOrder) {
        this.reverseOrder = reverseOrder;
        return this;
    }
}