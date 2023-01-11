package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiKeyInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_email")
    public String customerEmail;
    public ApiKeyInfo withCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_name")
    public String customerName;
    public ApiKeyInfo withCustomerName(String customerName) {
        this.customerName = customerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires")
    public String expires;
    public ApiKeyInfo withExpires(String expires) {
        this.expires = expires;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item_id")
    public String itemId;
    public ApiKeyInfo withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item_name")
    public String itemName;
    public ApiKeyInfo withItemName(String itemName) {
        this.itemName = itemName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public String license;
    public ApiKeyInfo withLicense(String license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_limit")
    public String licenseLimit;
    public ApiKeyInfo withLicenseLimit(String licenseLimit) {
        this.licenseLimit = licenseLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_id")
    public String priceId;
    public ApiKeyInfo withPriceId(String priceId) {
        this.priceId = priceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public String success;
    public ApiKeyInfo withSuccess(String success) {
        this.success = success;
        return this;
    }
}