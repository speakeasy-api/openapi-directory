package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublishSchemaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublishedSchemaArn")
    public String publishedSchemaArn;
    public PublishSchemaResponse withPublishedSchemaArn(String publishedSchemaArn) {
        this.publishedSchemaArn = publishedSchemaArn;
        return this;
    }
}