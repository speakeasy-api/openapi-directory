package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PrivateFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computed_md5")
    public String computedMd5;
    public PrivateFile withComputedMd5(String computedMd5) {
        this.computedMd5 = computedMd5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public PrivateFile withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PrivateFile withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_link_only")
    public Boolean isLinkOnly;
    public PrivateFile withIsLinkOnly(Boolean isLinkOnly) {
        this.isLinkOnly = isLinkOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PrivateFile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_state")
    public String previewState;
    public PrivateFile withPreviewState(String previewState) {
        this.previewState = previewState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public PrivateFile withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public PrivateFile withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplied_md5")
    public String suppliedMd5;
    public PrivateFile withSuppliedMd5(String suppliedMd5) {
        this.suppliedMd5 = suppliedMd5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload_token")
    public String uploadToken;
    public PrivateFile withUploadToken(String uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload_url")
    public String uploadUrl;
    public PrivateFile withUploadUrl(String uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewer_type")
    public String viewerType;
    public PrivateFile withViewerType(String viewerType) {
        this.viewerType = viewerType;
        return this;
    }
}