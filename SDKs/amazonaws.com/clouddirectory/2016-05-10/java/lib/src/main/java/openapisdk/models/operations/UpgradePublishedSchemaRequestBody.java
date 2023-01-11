package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpgradePublishedSchemaRequestBody {
    @JsonProperty("DevelopmentSchemaArn")
    public String developmentSchemaArn;
    public UpgradePublishedSchemaRequestBody withDevelopmentSchemaArn(String developmentSchemaArn) {
        this.developmentSchemaArn = developmentSchemaArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public UpgradePublishedSchemaRequestBody withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("MinorVersion")
    public String minorVersion;
    public UpgradePublishedSchemaRequestBody withMinorVersion(String minorVersion) {
        this.minorVersion = minorVersion;
        return this;
    }
    @JsonProperty("PublishedSchemaArn")
    public String publishedSchemaArn;
    public UpgradePublishedSchemaRequestBody withPublishedSchemaArn(String publishedSchemaArn) {
        this.publishedSchemaArn = publishedSchemaArn;
        return this;
    }
}