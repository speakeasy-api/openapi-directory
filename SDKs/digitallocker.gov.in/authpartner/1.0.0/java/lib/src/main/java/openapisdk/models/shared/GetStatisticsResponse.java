package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetStatisticsResponse {
    @JsonProperty("authentic_documents")
    public String authenticDocuments;
    public GetStatisticsResponse withAuthenticDocuments(String authenticDocuments) {
        this.authenticDocuments = authenticDocuments;
        return this;
    }
    @JsonProperty("count_as_on")
    public String countAsOn;
    public GetStatisticsResponse withCountAsOn(String countAsOn) {
        this.countAsOn = countAsOn;
        return this;
    }
    @JsonProperty("issuers")
    public String issuers;
    public GetStatisticsResponse withIssuers(String issuers) {
        this.issuers = issuers;
        return this;
    }
    @JsonProperty("monthwise_registations")
    public GetStatisticsResponseMonthwiseRegistations monthwiseRegistations;
    public GetStatisticsResponse withMonthwiseRegistations(GetStatisticsResponseMonthwiseRegistations monthwiseRegistations) {
        this.monthwiseRegistations = monthwiseRegistations;
        return this;
    }
    @JsonProperty("requestors")
    public String requestors;
    public GetStatisticsResponse withRequestors(String requestors) {
        this.requestors = requestors;
        return this;
    }
    @JsonProperty("users")
    public String users;
    public GetStatisticsResponse withUsers(String users) {
        this.users = users;
        return this;
    }
    @JsonProperty("yearwise_authentic_documents")
    public GetStatisticsResponseYearwiseAuthenticDocuments yearwiseAuthenticDocuments;
    public GetStatisticsResponse withYearwiseAuthenticDocuments(GetStatisticsResponseYearwiseAuthenticDocuments yearwiseAuthenticDocuments) {
        this.yearwiseAuthenticDocuments = yearwiseAuthenticDocuments;
        return this;
    }
}