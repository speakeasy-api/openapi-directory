package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataTransfer
 * Defines the real-time status of a Snow device's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.
**/
public class DataTransfer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BytesTransferred")
    public Long bytesTransferred;
    public DataTransfer withBytesTransferred(Long bytesTransferred) {
        this.bytesTransferred = bytesTransferred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectsTransferred")
    public Long objectsTransferred;
    public DataTransfer withObjectsTransferred(Long objectsTransferred) {
        this.objectsTransferred = objectsTransferred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalBytes")
    public Long totalBytes;
    public DataTransfer withTotalBytes(Long totalBytes) {
        this.totalBytes = totalBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalObjects")
    public Long totalObjects;
    public DataTransfer withTotalObjects(Long totalObjects) {
        this.totalObjects = totalObjects;
        return this;
    }
}