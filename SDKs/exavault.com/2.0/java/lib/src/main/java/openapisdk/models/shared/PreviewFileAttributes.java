package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewFileAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public PreviewFileAttributes withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageHash")
    public String imageHash;
    public PreviewFileAttributes withImageHash(String imageHash) {
        this.imageHash = imageHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageCount")
    public Integer pageCount;
    public PreviewFileAttributes withPageCount(Integer pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public PreviewFileAttributes withSize(Long size) {
        this.size = size;
        return this;
    }
}