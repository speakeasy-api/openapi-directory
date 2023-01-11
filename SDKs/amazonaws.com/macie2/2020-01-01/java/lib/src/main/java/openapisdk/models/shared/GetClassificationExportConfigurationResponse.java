package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClassificationExportConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public ClassificationExportConfiguration configuration;
    public GetClassificationExportConfigurationResponse withConfiguration(ClassificationExportConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
}