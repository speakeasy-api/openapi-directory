package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CodesOfConductGetAllCodesOfConduct415ApplicationJson {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public CodesOfConductGetAllCodesOfConduct415ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public CodesOfConductGetAllCodesOfConduct415ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}