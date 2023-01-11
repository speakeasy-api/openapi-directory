package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExportLambdaFunctionRecommendationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountIds")
    public String[] accountIds;
    public ExportLambdaFunctionRecommendationsRequest withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldsToExport")
    public ExportableLambdaFunctionFieldEnum[] fieldsToExport;
    public ExportLambdaFunctionRecommendationsRequest withFieldsToExport(ExportableLambdaFunctionFieldEnum[] fieldsToExport) {
        this.fieldsToExport = fieldsToExport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileFormat")
    public FileFormatEnum fileFormat;
    public ExportLambdaFunctionRecommendationsRequest withFileFormat(FileFormatEnum fileFormat) {
        this.fileFormat = fileFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public LambdaFunctionRecommendationFilter[] filters;
    public ExportLambdaFunctionRecommendationsRequest withFilters(LambdaFunctionRecommendationFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeMemberAccounts")
    public Boolean includeMemberAccounts;
    public ExportLambdaFunctionRecommendationsRequest withIncludeMemberAccounts(Boolean includeMemberAccounts) {
        this.includeMemberAccounts = includeMemberAccounts;
        return this;
    }
    @JsonProperty("s3DestinationConfig")
    public S3DestinationConfig s3DestinationConfig;
    public ExportLambdaFunctionRecommendationsRequest withS3DestinationConfig(S3DestinationConfig s3DestinationConfig) {
        this.s3DestinationConfig = s3DestinationConfig;
        return this;
    }
}