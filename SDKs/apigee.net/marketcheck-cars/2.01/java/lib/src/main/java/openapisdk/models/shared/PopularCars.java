package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PopularCars
 * Top 50 popular cars
**/
public class PopularCars {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_top50")
    public BasePopular[] newTop50;
    public PopularCars withNewTop50(BasePopular[] newTop50) {
        this.newTop50 = newTop50;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("used_top50")
    public BasePopular[] usedTop50;
    public PopularCars withUsedTop50(BasePopular[] usedTop50) {
        this.usedTop50 = usedTop50;
        return this;
    }
}