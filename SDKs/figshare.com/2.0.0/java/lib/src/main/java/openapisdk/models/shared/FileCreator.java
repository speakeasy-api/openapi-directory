package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FileCreator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public FileCreator withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5")
    public String md5;
    public FileCreator withMd5(String md5) {
        this.md5 = md5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FileCreator withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public FileCreator withSize(Long size) {
        this.size = size;
        return this;
    }
}