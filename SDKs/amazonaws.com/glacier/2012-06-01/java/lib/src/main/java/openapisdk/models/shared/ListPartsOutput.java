package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPartsOutput
 * Contains the Amazon S3 Glacier response to your request.
**/
public class ListPartsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArchiveDescription")
    public String archiveDescription;
    public ListPartsOutput withArchiveDescription(String archiveDescription) {
        this.archiveDescription = archiveDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationDate")
    public String creationDate;
    public ListPartsOutput withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public ListPartsOutput withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultipartUploadId")
    public String multipartUploadId;
    public ListPartsOutput withMultipartUploadId(String multipartUploadId) {
        this.multipartUploadId = multipartUploadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartSizeInBytes")
    public Long partSizeInBytes;
    public ListPartsOutput withPartSizeInBytes(Long partSizeInBytes) {
        this.partSizeInBytes = partSizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parts")
    public PartListElement[] parts;
    public ListPartsOutput withParts(PartListElement[] parts) {
        this.parts = parts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VaultARN")
    public String vaultARN;
    public ListPartsOutput withVaultArn(String vaultARN) {
        this.vaultARN = vaultARN;
        return this;
    }
}