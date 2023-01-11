package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutClassificationExportConfigurationRequestBody {
    @JsonProperty("configuration")
    public PutClassificationExportConfigurationRequestBodyConfiguration configuration;
    public PutClassificationExportConfigurationRequestBody withConfiguration(PutClassificationExportConfigurationRequestBodyConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
}