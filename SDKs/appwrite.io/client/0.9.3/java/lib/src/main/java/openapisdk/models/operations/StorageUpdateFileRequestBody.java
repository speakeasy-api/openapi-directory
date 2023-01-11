package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StorageUpdateFileRequestBody {
    @JsonProperty("read")
    public String[] read;
    public StorageUpdateFileRequestBody withRead(String[] read) {
        this.read = read;
        return this;
    }
    @JsonProperty("write")
    public String[] write;
    public StorageUpdateFileRequestBody withWrite(String[] write) {
        this.write = write;
        return this;
    }
}