package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoMlResult
 * When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), specifies the recipe that best optimized the specified metric.
**/
public class AutoMlResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestRecipeArn")
    public String bestRecipeArn;
    public AutoMlResult withBestRecipeArn(String bestRecipeArn) {
        this.bestRecipeArn = bestRecipeArn;
        return this;
    }
}