package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BundleDownloadEntity
 * List Bundle Downloads
**/
public class BundleDownloadEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundle_registration")
    public BundleRegistrationEntity bundleRegistration;
    public BundleDownloadEntity withBundleRegistration(BundleRegistrationEntity bundleRegistration) {
        this.bundleRegistration = bundleRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public BundleDownloadEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_method")
    public BundleDownloadEntityDownloadMethodEnum downloadMethod;
    public BundleDownloadEntity withDownloadMethod(BundleDownloadEntityDownloadMethodEnum downloadMethod) {
        this.downloadMethod = downloadMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public BundleDownloadEntity withPath(String path) {
        this.path = path;
        return this;
    }
}