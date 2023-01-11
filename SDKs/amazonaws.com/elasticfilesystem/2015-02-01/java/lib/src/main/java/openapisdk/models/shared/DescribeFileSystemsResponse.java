package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFileSystemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileSystems")
    public FileSystemDescription[] fileSystems;
    public DescribeFileSystemsResponse withFileSystems(FileSystemDescription[] fileSystems) {
        this.fileSystems = fileSystems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeFileSystemsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public DescribeFileSystemsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}