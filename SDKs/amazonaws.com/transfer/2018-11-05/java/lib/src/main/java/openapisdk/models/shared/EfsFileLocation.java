package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EfsFileLocation
 * <p>Specifies the details for the file location for the file being used in the workflow. Only applicable if you are using Amazon EFS for storage.</p> <p> You need to provide the file system ID and the pathname. The pathname can represent either a path or a file. This is determined by whether or not you end the path value with the forward slash (/) character. If the final character is "/", then your file is copied to the folder, and its name does not change. If, rather, the final character is alphanumeric, your uploaded file is renamed to the path value. In this case, if a file with that name already exists, it is overwritten. </p> <p>For example, if your path is <code>shared-files/bob/</code>, your uploaded files are copied to the <code>shared-files/bob/</code>, folder. If your path is <code>shared-files/today</code>, each uploaded file is copied to the <code>shared-files</code> folder and named <code>today</code>: each upload overwrites the previous version of the <code>bob</code> file.</p>
**/
public class EfsFileLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileSystemId")
    public String fileSystemId;
    public EfsFileLocation withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Path")
    public String path;
    public EfsFileLocation withPath(String path) {
        this.path = path;
        return this;
    }
}