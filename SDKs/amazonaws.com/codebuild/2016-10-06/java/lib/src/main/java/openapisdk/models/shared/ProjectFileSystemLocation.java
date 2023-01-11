package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectFileSystemLocation
 *  Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a> 
**/
public class ProjectFileSystemLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public String identifier;
    public ProjectFileSystemLocation withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ProjectFileSystemLocation withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountOptions")
    public String mountOptions;
    public ProjectFileSystemLocation withMountOptions(String mountOptions) {
        this.mountOptions = mountOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountPoint")
    public String mountPoint;
    public ProjectFileSystemLocation withMountPoint(String mountPoint) {
        this.mountPoint = mountPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public FileSystemTypeEnum type;
    public ProjectFileSystemLocation withType(FileSystemTypeEnum type) {
        this.type = type;
        return this;
    }
}