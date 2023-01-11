package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StoreAlertLinks
 * The different actions you can make on this alert
**/
public class StoreAlertLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("save")
    public LinksSaveStoreAlertsLink save;
    public StoreAlertLinks withSave(LinksSaveStoreAlertsLink save) {
        this.save = save;
        return this;
    }
}