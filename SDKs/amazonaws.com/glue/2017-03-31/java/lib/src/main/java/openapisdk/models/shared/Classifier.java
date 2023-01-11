package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Classifier
 * <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p>
**/
public class Classifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CsvClassifier")
    public CsvClassifier csvClassifier;
    public Classifier withCsvClassifier(CsvClassifier csvClassifier) {
        this.csvClassifier = csvClassifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrokClassifier")
    public GrokClassifier grokClassifier;
    public Classifier withGrokClassifier(GrokClassifier grokClassifier) {
        this.grokClassifier = grokClassifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JsonClassifier")
    public JsonClassifier jsonClassifier;
    public Classifier withJsonClassifier(JsonClassifier jsonClassifier) {
        this.jsonClassifier = jsonClassifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("XMLClassifier")
    public XmlClassifier xmlClassifier;
    public Classifier withXmlClassifier(XmlClassifier xmlClassifier) {
        this.xmlClassifier = xmlClassifier;
        return this;
    }
}