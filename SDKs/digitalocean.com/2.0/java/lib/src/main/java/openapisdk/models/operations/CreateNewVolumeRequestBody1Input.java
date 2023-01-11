package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNewVolumeRequestBody1Input {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateNewVolumeRequestBody1Input withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filesystem_label")
    public java.util.Map<String, Object> filesystemLabel;
    public CreateNewVolumeRequestBody1Input withFilesystemLabel(java.util.Map<String, Object> filesystemLabel) {
        this.filesystemLabel = filesystemLabel;
        return this;
    }
    @JsonProperty("filesystem_type")
    public String filesystemType;
    public CreateNewVolumeRequestBody1Input withFilesystemType(String filesystemType) {
        this.filesystemType = filesystemType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNewVolumeRequestBody1Input withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("region")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region;
    public CreateNewVolumeRequestBody1Input withRegion(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region) {
        this.region = region;
        return this;
    }
    @JsonProperty("size_gigabytes")
    public Long sizeGigabytes;
    public CreateNewVolumeRequestBody1Input withSizeGigabytes(Long sizeGigabytes) {
        this.sizeGigabytes = sizeGigabytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshot_id")
    public String snapshotId;
    public CreateNewVolumeRequestBody1Input withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public CreateNewVolumeRequestBody1Input withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}