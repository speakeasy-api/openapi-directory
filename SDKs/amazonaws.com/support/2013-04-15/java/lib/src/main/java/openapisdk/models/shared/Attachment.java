package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attachment
 * An attachment to a case communication. The attachment consists of the file name and the content of the file.
**/
public class Attachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public Attachment withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public Attachment withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
}