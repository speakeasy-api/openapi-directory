package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DatabaseUpdateDocumentRequestBody {
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public DatabaseUpdateDocumentRequestBody withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public String[] read;
    public DatabaseUpdateDocumentRequestBody withRead(String[] read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("write")
    public String[] write;
    public DatabaseUpdateDocumentRequestBody withWrite(String[] write) {
        this.write = write;
        return this;
    }
}