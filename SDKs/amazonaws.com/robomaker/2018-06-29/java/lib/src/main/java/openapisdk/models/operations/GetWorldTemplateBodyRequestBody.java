package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorldTemplateBodyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generationJob")
    public String generationJob;
    public GetWorldTemplateBodyRequestBody withGenerationJob(String generationJob) {
        this.generationJob = generationJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public String template;
    public GetWorldTemplateBodyRequestBody withTemplate(String template) {
        this.template = template;
        return this;
    }
}