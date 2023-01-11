package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetStatisticsResponseYearwiseAuthenticDocuments
 * List of cumulative year-wise counts of authentic documents in DigiLocker.
**/
public class GetStatisticsResponseYearwiseAuthenticDocuments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GetStatisticsResponseYearwiseAuthenticDocuments withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public GetStatisticsResponseYearwiseAuthenticDocumentsDetails details;
    public GetStatisticsResponseYearwiseAuthenticDocuments withDetails(GetStatisticsResponseYearwiseAuthenticDocumentsDetails details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details1")
    public GetStatisticsResponseYearwiseAuthenticDocumentsDetails1 details1;
    public GetStatisticsResponseYearwiseAuthenticDocuments withDetails1(GetStatisticsResponseYearwiseAuthenticDocumentsDetails1 details1) {
        this.details1 = details1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details2")
    public GetStatisticsResponseYearwiseAuthenticDocumentsDetails2 details2;
    public GetStatisticsResponseYearwiseAuthenticDocuments withDetails2(GetStatisticsResponseYearwiseAuthenticDocumentsDetails2 details2) {
        this.details2 = details2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetStatisticsResponseYearwiseAuthenticDocuments withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public GetStatisticsResponseYearwiseAuthenticDocuments withYear(Long year) {
        this.year = year;
        return this;
    }
}