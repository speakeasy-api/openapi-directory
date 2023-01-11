package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketBundle
 * <p>Describes the specifications of a bundle that can be applied to an Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.</p>
**/
public class BucketBundle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public BucketBundle withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isActive")
    public Boolean isActive;
    public BucketBundle withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BucketBundle withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Float price;
    public BucketBundle withPrice(Float price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storagePerMonthInGb")
    public Long storagePerMonthInGb;
    public BucketBundle withStoragePerMonthInGb(Long storagePerMonthInGb) {
        this.storagePerMonthInGb = storagePerMonthInGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferPerMonthInGb")
    public Long transferPerMonthInGb;
    public BucketBundle withTransferPerMonthInGb(Long transferPerMonthInGb) {
        this.transferPerMonthInGb = transferPerMonthInGb;
        return this;
    }
}