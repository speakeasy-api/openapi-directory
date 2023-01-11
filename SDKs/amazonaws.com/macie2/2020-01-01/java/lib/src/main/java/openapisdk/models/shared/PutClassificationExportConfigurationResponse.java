package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutClassificationExportConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public ClassificationExportConfiguration configuration;
    public PutClassificationExportConfigurationResponse withConfiguration(ClassificationExportConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
}