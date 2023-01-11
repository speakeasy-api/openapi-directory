package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateClassifierRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CsvClassifier")
    public CreateCsvClassifierRequest csvClassifier;
    public CreateClassifierRequest withCsvClassifier(CreateCsvClassifierRequest csvClassifier) {
        this.csvClassifier = csvClassifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrokClassifier")
    public CreateGrokClassifierRequest grokClassifier;
    public CreateClassifierRequest withGrokClassifier(CreateGrokClassifierRequest grokClassifier) {
        this.grokClassifier = grokClassifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JsonClassifier")
    public CreateJsonClassifierRequest jsonClassifier;
    public CreateClassifierRequest withJsonClassifier(CreateJsonClassifierRequest jsonClassifier) {
        this.jsonClassifier = jsonClassifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("XMLClassifier")
    public CreateXmlClassifierRequest xmlClassifier;
    public CreateClassifierRequest withXmlClassifier(CreateXmlClassifierRequest xmlClassifier) {
        this.xmlClassifier = xmlClassifier;
        return this;
    }
}