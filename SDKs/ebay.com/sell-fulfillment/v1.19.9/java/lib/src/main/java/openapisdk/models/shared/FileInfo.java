package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileInfo
 * This type is used by the files array, which shows the name, ID, file type, and upload date for each provided evidential file.
**/
public class FileInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileId")
    public String fileId;
    public FileInfo withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileType")
    public String fileType;
    public FileInfo withFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FileInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadedDate")
    public String uploadedDate;
    public FileInfo withUploadedDate(String uploadedDate) {
        this.uploadedDate = uploadedDate;
        return this;
    }
}