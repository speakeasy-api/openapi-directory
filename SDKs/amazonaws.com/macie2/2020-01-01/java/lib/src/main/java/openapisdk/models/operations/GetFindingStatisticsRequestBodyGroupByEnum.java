package openapisdk.models.operations;


public enum GetFindingStatisticsRequestBodyGroupByEnum {
    RESOURCES_AFFECTED_S3_BUCKET_NAME("resourcesAffected.s3Bucket.name"),
    TYPE("type"),
    CLASSIFICATION_DETAILS_JOB_ID("classificationDetails.jobId"),
    SEVERITY_DESCRIPTION("severity.description");

    public final String value;

    private GetFindingStatisticsRequestBodyGroupByEnum(String value) {
        this.value = value;
    }
}
