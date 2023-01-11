package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentProductData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public DocumentProductData withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DocumentProductData withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("quantity")
    public Float quantity;
    public DocumentProductData withQuantity(Float quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonProperty("unit")
    public String unit;
    public DocumentProductData withUnit(String unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("unit_price")
    public Float unitPrice;
    public DocumentProductData withUnitPrice(Float unitPrice) {
        this.unitPrice = unitPrice;
        return this;
    }
    @JsonProperty("unit_price_type")
    public UnitPriceTypeEnum unitPriceType;
    public DocumentProductData withUnitPriceType(UnitPriceTypeEnum unitPriceType) {
        this.unitPriceType = unitPriceType;
        return this;
    }
    @JsonProperty("vat")
    public VatEnum vat;
    public DocumentProductData withVat(VatEnum vat) {
        this.vat = vat;
        return this;
    }
}