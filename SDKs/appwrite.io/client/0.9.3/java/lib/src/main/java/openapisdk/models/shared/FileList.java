package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FileList
 * Files List
**/
public class FileList {
    @JsonProperty("files")
    public File[] files;
    public FileList withFiles(File[] files) {
        this.files = files;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public FileList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}