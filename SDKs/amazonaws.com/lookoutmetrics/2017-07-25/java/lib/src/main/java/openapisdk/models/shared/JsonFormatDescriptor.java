package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JsonFormatDescriptor
 * Contains information about how a source JSON data file should be analyzed.
**/
public class JsonFormatDescriptor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charset")
    public String charset;
    public JsonFormatDescriptor withCharset(String charset) {
        this.charset = charset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileCompression")
    public JsonFileCompressionEnum fileCompression;
    public JsonFormatDescriptor withFileCompression(JsonFileCompressionEnum fileCompression) {
        this.fileCompression = fileCompression;
        return this;
    }
}