package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpgradeAppliedSchemaRequestBody {
    @JsonProperty("DirectoryArn")
    public String directoryArn;
    public UpgradeAppliedSchemaRequestBody withDirectoryArn(String directoryArn) {
        this.directoryArn = directoryArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public UpgradeAppliedSchemaRequestBody withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("PublishedSchemaArn")
    public String publishedSchemaArn;
    public UpgradeAppliedSchemaRequestBody withPublishedSchemaArn(String publishedSchemaArn) {
        this.publishedSchemaArn = publishedSchemaArn;
        return this;
    }
}