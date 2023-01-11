package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HeroImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_sizes")
    public HeroImageDisplaySize[] displaySizes;
    public HeroImage withDisplaySizes(HeroImageDisplaySize[] displaySizes) {
        this.displaySizes = displaySizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public HeroImage withId(String id) {
        this.id = id;
        return this;
    }
}