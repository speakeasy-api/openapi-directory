package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class GetOrganizationsAccessReportResponse {
    public AccessDetail[] accessDetails;
    public GetOrganizationsAccessReportResponse withAccessDetails(AccessDetail[] accessDetails) {
        this.accessDetails = accessDetails;
        return this;
    }
    public ErrorDetails errorDetails;
    public GetOrganizationsAccessReportResponse withErrorDetails(ErrorDetails errorDetails) {
        this.errorDetails = errorDetails;
        return this;
    }
    public Boolean isTruncated;
    public GetOrganizationsAccessReportResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public OffsetDateTime jobCompletionDate;
    public GetOrganizationsAccessReportResponse withJobCompletionDate(OffsetDateTime jobCompletionDate) {
        this.jobCompletionDate = jobCompletionDate;
        return this;
    }
    public OffsetDateTime jobCreationDate;
    public GetOrganizationsAccessReportResponse withJobCreationDate(OffsetDateTime jobCreationDate) {
        this.jobCreationDate = jobCreationDate;
        return this;
    }
    public JobStatusTypeEnum jobStatus;
    public GetOrganizationsAccessReportResponse withJobStatus(JobStatusTypeEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    public String marker;
    public GetOrganizationsAccessReportResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Long numberOfServicesAccessible;
    public GetOrganizationsAccessReportResponse withNumberOfServicesAccessible(Long numberOfServicesAccessible) {
        this.numberOfServicesAccessible = numberOfServicesAccessible;
        return this;
    }
    public Long numberOfServicesNotAccessed;
    public GetOrganizationsAccessReportResponse withNumberOfServicesNotAccessed(Long numberOfServicesNotAccessed) {
        this.numberOfServicesNotAccessed = numberOfServicesNotAccessed;
        return this;
    }
}