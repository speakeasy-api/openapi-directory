package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OtaUpdateFile
 * Describes a file to be associated with an OTA update.
**/
public class OtaUpdateFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public OtaUpdateFile withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codeSigning")
    public CodeSigning codeSigning;
    public OtaUpdateFile withCodeSigning(CodeSigning codeSigning) {
        this.codeSigning = codeSigning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileLocation")
    public FileLocation fileLocation;
    public OtaUpdateFile withFileLocation(FileLocation fileLocation) {
        this.fileLocation = fileLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public OtaUpdateFile withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileType")
    public Long fileType;
    public OtaUpdateFile withFileType(Long fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileVersion")
    public String fileVersion;
    public OtaUpdateFile withFileVersion(String fileVersion) {
        this.fileVersion = fileVersion;
        return this;
    }
}