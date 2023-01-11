package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderNotes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licensee_name")
    public String licenseeName;
    public OrderNotes withLicenseeName(String licenseeName) {
        this.licenseeName = licenseeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ordered_by")
    public String orderedBy;
    public OrderNotes withOrderedBy(String orderedBy) {
        this.orderedBy = orderedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_title")
    public String projectTitle;
    public OrderNotes withProjectTitle(String projectTitle) {
        this.projectTitle = projectTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_order_number")
    public String purchaseOrderNumber;
    public OrderNotes withPurchaseOrderNumber(String purchaseOrderNumber) {
        this.purchaseOrderNumber = purchaseOrderNumber;
        return this;
    }
}