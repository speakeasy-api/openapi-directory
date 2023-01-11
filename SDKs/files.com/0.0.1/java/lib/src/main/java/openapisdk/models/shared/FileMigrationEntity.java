package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileMigrationEntity
 * Show File Migration
**/
public class FileMigrationEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dest_path")
    public String destPath;
    public FileMigrationEntity withDestPath(String destPath) {
        this.destPath = destPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files_moved")
    public Integer filesMoved;
    public FileMigrationEntity withFilesMoved(Integer filesMoved) {
        this.filesMoved = filesMoved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files_total")
    public Integer filesTotal;
    public FileMigrationEntity withFilesTotal(Integer filesTotal) {
        this.filesTotal = filesTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public FileMigrationEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("log_url")
    public String logUrl;
    public FileMigrationEntity withLogUrl(String logUrl) {
        this.logUrl = logUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public FileMigrationEntityOperationEnum operation;
    public FileMigrationEntity withOperation(FileMigrationEntityOperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public FileMigrationEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public FileMigrationEntity withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public FileMigrationEntityStatusEnum status;
    public FileMigrationEntity withStatus(FileMigrationEntityStatusEnum status) {
        this.status = status;
        return this;
    }
}