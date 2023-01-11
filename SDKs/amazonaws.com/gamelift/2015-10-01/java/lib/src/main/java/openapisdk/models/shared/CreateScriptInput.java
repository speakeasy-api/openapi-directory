package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateScriptInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateScriptInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageLocation")
    public S3Location storageLocation;
    public CreateScriptInput withStorageLocation(S3Location storageLocation) {
        this.storageLocation = storageLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateScriptInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public CreateScriptInput withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ZipFile")
    public String zipFile;
    public CreateScriptInput withZipFile(String zipFile) {
        this.zipFile = zipFile;
        return this;
    }
}