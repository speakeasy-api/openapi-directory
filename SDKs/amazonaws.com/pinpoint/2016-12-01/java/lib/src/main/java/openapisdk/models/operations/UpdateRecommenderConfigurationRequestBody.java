package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRecommenderConfigurationRequestBody {
    @JsonProperty("UpdateRecommenderConfiguration")
    public UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration updateRecommenderConfiguration;
    public UpdateRecommenderConfigurationRequestBody withUpdateRecommenderConfiguration(UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration updateRecommenderConfiguration) {
        this.updateRecommenderConfiguration = updateRecommenderConfiguration;
        return this;
    }
}