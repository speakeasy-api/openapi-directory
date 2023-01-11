package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TenderInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public TenderInput withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allows_tipping")
    public Boolean allowsTipping;
    public TenderInput withAllowsTipping(Boolean allowsTipping) {
        this.allowsTipping = allowsTipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editable")
    public Boolean editable;
    public TenderInput withEditable(Boolean editable) {
        this.editable = editable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden")
    public Boolean hidden;
    public TenderInput withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public TenderInput withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public TenderInput withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opens_cash_drawer")
    public Boolean opensCashDrawer;
    public TenderInput withOpensCashDrawer(Boolean opensCashDrawer) {
        this.opensCashDrawer = opensCashDrawer;
        return this;
    }
}