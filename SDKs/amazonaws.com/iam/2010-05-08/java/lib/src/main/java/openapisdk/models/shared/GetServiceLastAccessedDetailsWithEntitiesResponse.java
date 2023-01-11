package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class GetServiceLastAccessedDetailsWithEntitiesResponse {
    public EntityDetails[] entityDetailsList;
    public GetServiceLastAccessedDetailsWithEntitiesResponse withEntityDetailsList(EntityDetails[] entityDetailsList) {
        this.entityDetailsList = entityDetailsList;
        return this;
    }
    public ErrorDetails error;
    public GetServiceLastAccessedDetailsWithEntitiesResponse withError(ErrorDetails error) {
        this.error = error;
        return this;
    }
    public Boolean isTruncated;
    public GetServiceLastAccessedDetailsWithEntitiesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public OffsetDateTime jobCompletionDate;
    public GetServiceLastAccessedDetailsWithEntitiesResponse withJobCompletionDate(OffsetDateTime jobCompletionDate) {
        this.jobCompletionDate = jobCompletionDate;
        return this;
    }
    public OffsetDateTime jobCreationDate;
    public GetServiceLastAccessedDetailsWithEntitiesResponse withJobCreationDate(OffsetDateTime jobCreationDate) {
        this.jobCreationDate = jobCreationDate;
        return this;
    }
    public JobStatusTypeEnum jobStatus;
    public GetServiceLastAccessedDetailsWithEntitiesResponse withJobStatus(JobStatusTypeEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    public String marker;
    public GetServiceLastAccessedDetailsWithEntitiesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}