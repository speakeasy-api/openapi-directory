package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateRecommenderConfigurationRequestBody {
    @JsonProperty("CreateRecommenderConfiguration")
    public CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration createRecommenderConfiguration;
    public CreateRecommenderConfigurationRequestBody withCreateRecommenderConfiguration(CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration createRecommenderConfiguration) {
        this.createRecommenderConfiguration = createRecommenderConfiguration;
        return this;
    }
}