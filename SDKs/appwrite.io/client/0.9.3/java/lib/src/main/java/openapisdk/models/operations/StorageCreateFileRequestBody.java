package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageCreateFileRequestBody {
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public StorageCreateFileRequestBody withFile(String file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=read,json")
    public String[] read;
    public StorageCreateFileRequestBody withRead(String[] read) {
        this.read = read;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=write,json")
    public String[] write;
    public StorageCreateFileRequestBody withWrite(String[] write) {
        this.write = write;
        return this;
    }
}