package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * FormDataContentDisposition
 * The metadata for the file.
**/
public class FormDataContentDisposition {
    @SpeakeasyMetadata("multipartForm:name=creationDate")
    public String creationDate;
    public FormDataContentDisposition withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=fileName")
    public String fileName;
    public FormDataContentDisposition withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=modificationDate")
    public String modificationDate;
    public FormDataContentDisposition withModificationDate(String modificationDate) {
        this.modificationDate = modificationDate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public FormDataContentDisposition withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=parameters,json")
    public java.util.Map<String, String> parameters;
    public FormDataContentDisposition withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=readDate")
    public String readDate;
    public FormDataContentDisposition withReadDate(String readDate) {
        this.readDate = readDate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=size")
    public Integer size;
    public FormDataContentDisposition withSize(Integer size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public String type;
    public FormDataContentDisposition withType(String type) {
        this.type = type;
        return this;
    }
}