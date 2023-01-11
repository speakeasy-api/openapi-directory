package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExportAutoScalingGroupRecommendationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountIds")
    public String[] accountIds;
    public ExportAutoScalingGroupRecommendationsRequest withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldsToExport")
    public ExportableAutoScalingGroupFieldEnum[] fieldsToExport;
    public ExportAutoScalingGroupRecommendationsRequest withFieldsToExport(ExportableAutoScalingGroupFieldEnum[] fieldsToExport) {
        this.fieldsToExport = fieldsToExport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileFormat")
    public FileFormatEnum fileFormat;
    public ExportAutoScalingGroupRecommendationsRequest withFileFormat(FileFormatEnum fileFormat) {
        this.fileFormat = fileFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public Filter[] filters;
    public ExportAutoScalingGroupRecommendationsRequest withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeMemberAccounts")
    public Boolean includeMemberAccounts;
    public ExportAutoScalingGroupRecommendationsRequest withIncludeMemberAccounts(Boolean includeMemberAccounts) {
        this.includeMemberAccounts = includeMemberAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationPreferences")
    public RecommendationPreferences recommendationPreferences;
    public ExportAutoScalingGroupRecommendationsRequest withRecommendationPreferences(RecommendationPreferences recommendationPreferences) {
        this.recommendationPreferences = recommendationPreferences;
        return this;
    }
    @JsonProperty("s3DestinationConfig")
    public S3DestinationConfig s3DestinationConfig;
    public ExportAutoScalingGroupRecommendationsRequest withS3DestinationConfig(S3DestinationConfig s3DestinationConfig) {
        this.s3DestinationConfig = s3DestinationConfig;
        return this;
    }
}