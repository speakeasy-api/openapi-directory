package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileUploadPartEntity
 * Begin file upload
**/
public class FileUploadPartEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public FileUploadPartEntity withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ask_about_overwrites")
    public Boolean askAboutOverwrites;
    public FileUploadPartEntity withAskAboutOverwrites(Boolean askAboutOverwrites) {
        this.askAboutOverwrites = askAboutOverwrites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_parts")
    public Integer availableParts;
    public FileUploadPartEntity withAvailableParts(Integer availableParts) {
        this.availableParts = availableParts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires")
    public String expires;
    public FileUploadPartEntity withExpires(String expires) {
        this.expires = expires;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, Object> headers;
    public FileUploadPartEntity withHeaders(java.util.Map<String, Object> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_method")
    public String httpMethod;
    public FileUploadPartEntity withHttpMethod(String httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_partsize")
    public Integer nextPartsize;
    public FileUploadPartEntity withNextPartsize(Integer nextPartsize) {
        this.nextPartsize = nextPartsize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parallel_parts")
    public Boolean parallelParts;
    public FileUploadPartEntity withParallelParts(Boolean parallelParts) {
        this.parallelParts = parallelParts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, Object> parameters;
    public FileUploadPartEntity withParameters(java.util.Map<String, Object> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("part_number")
    public Integer partNumber;
    public FileUploadPartEntity withPartNumber(Integer partNumber) {
        this.partNumber = partNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partsize")
    public Integer partsize;
    public FileUploadPartEntity withPartsize(Integer partsize) {
        this.partsize = partsize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public FileUploadPartEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref")
    public String ref;
    public FileUploadPartEntity withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("send")
    public java.util.Map<String, Object> send;
    public FileUploadPartEntity withSend(java.util.Map<String, Object> send) {
        this.send = send;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload_uri")
    public String uploadUri;
    public FileUploadPartEntity withUploadUri(String uploadUri) {
        this.uploadUri = uploadUri;
        return this;
    }
}