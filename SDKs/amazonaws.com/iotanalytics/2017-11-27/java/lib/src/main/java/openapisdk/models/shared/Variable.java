package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Variable
 * An instance of a variable to be passed to the <code>containerAction</code> execution. Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.
**/
public class Variable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetContentVersionValue")
    public DatasetContentVersionValue datasetContentVersionValue;
    public Variable withDatasetContentVersionValue(DatasetContentVersionValue datasetContentVersionValue) {
        this.datasetContentVersionValue = datasetContentVersionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doubleValue")
    public Double doubleValue;
    public Variable withDoubleValue(Double doubleValue) {
        this.doubleValue = doubleValue;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Variable withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputFileUriValue")
    public OutputFileUriValue outputFileUriValue;
    public Variable withOutputFileUriValue(OutputFileUriValue outputFileUriValue) {
        this.outputFileUriValue = outputFileUriValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public Variable withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}