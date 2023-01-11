package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExportEbsVolumeRecommendationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountIds")
    public String[] accountIds;
    public ExportEbsVolumeRecommendationsRequest withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldsToExport")
    public ExportableVolumeFieldEnum[] fieldsToExport;
    public ExportEbsVolumeRecommendationsRequest withFieldsToExport(ExportableVolumeFieldEnum[] fieldsToExport) {
        this.fieldsToExport = fieldsToExport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileFormat")
    public FileFormatEnum fileFormat;
    public ExportEbsVolumeRecommendationsRequest withFileFormat(FileFormatEnum fileFormat) {
        this.fileFormat = fileFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public EbsFilter[] filters;
    public ExportEbsVolumeRecommendationsRequest withFilters(EbsFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeMemberAccounts")
    public Boolean includeMemberAccounts;
    public ExportEbsVolumeRecommendationsRequest withIncludeMemberAccounts(Boolean includeMemberAccounts) {
        this.includeMemberAccounts = includeMemberAccounts;
        return this;
    }
    @JsonProperty("s3DestinationConfig")
    public S3DestinationConfig s3DestinationConfig;
    public ExportEbsVolumeRecommendationsRequest withS3DestinationConfig(S3DestinationConfig s3DestinationConfig) {
        this.s3DestinationConfig = s3DestinationConfig;
        return this;
    }
}