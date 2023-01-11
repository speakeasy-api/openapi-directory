package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * File
 * File
**/
public class File {
    @JsonProperty("$id")
    public String dollarId;
    public File withDollarId(String dollarId) {
        this.dollarId = dollarId;
        return this;
    }
    @JsonProperty("$permissions")
    public java.util.Map<String, Object> dollarPermissions;
    public File withDollarPermissions(java.util.Map<String, Object> dollarPermissions) {
        this.dollarPermissions = dollarPermissions;
        return this;
    }
    @JsonProperty("dateCreated")
    public Integer dateCreated;
    public File withDateCreated(Integer dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonProperty("mimeType")
    public String mimeType;
    public File withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public File withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("signature")
    public String signature;
    public File withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @JsonProperty("sizeOriginal")
    public Integer sizeOriginal;
    public File withSizeOriginal(Integer sizeOriginal) {
        this.sizeOriginal = sizeOriginal;
        return this;
    }
}