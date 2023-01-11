package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestingData
 * The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset.
**/
public class TestingData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Assets")
    public Asset[] assets;
    public TestingData withAssets(Asset[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoCreate")
    public Boolean autoCreate;
    public TestingData withAutoCreate(Boolean autoCreate) {
        this.autoCreate = autoCreate;
        return this;
    }
}