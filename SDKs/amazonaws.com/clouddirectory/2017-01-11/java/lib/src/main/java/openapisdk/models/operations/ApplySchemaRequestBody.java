package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApplySchemaRequestBody {
    @JsonProperty("PublishedSchemaArn")
    public String publishedSchemaArn;
    public ApplySchemaRequestBody withPublishedSchemaArn(String publishedSchemaArn) {
        this.publishedSchemaArn = publishedSchemaArn;
        return this;
    }
}