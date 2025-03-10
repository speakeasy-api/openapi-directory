/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

public class RechnungsdruckWebAppControllersApiOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CanCreateAutoInvoice")
    public Boolean canCreateAutoInvoice;

    public RechnungsdruckWebAppControllersApiOrder withCanCreateAutoInvoice(Boolean canCreateAutoInvoice) {
        this.canCreateAutoInvoice = canCreateAutoInvoice;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;

    public RechnungsdruckWebAppControllersApiOrder withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExternalId")
    public String externalId;

    public RechnungsdruckWebAppControllersApiOrder withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HasInvoice")
    public Boolean hasInvoice;

    public RechnungsdruckWebAppControllersApiOrder withHasInvoice(Boolean hasInvoice) {
        this.hasInvoice = hasInvoice;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public Integer id;

    public RechnungsdruckWebAppControllersApiOrder withId(Integer id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("InvoiceCreatedAt")
    public OffsetDateTime invoiceCreatedAt;

    public RechnungsdruckWebAppControllersApiOrder withInvoiceCreatedAt(OffsetDateTime invoiceCreatedAt) {
        this.invoiceCreatedAt = invoiceCreatedAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("InvoiceDate")
    public OffsetDateTime invoiceDate;

    public RechnungsdruckWebAppControllersApiOrder withInvoiceDate(OffsetDateTime invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceNumber")
    public String invoiceNumber;

    public RechnungsdruckWebAppControllersApiOrder withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrderStateId")
    public Integer orderStateId;

    public RechnungsdruckWebAppControllersApiOrder withOrderStateId(Integer orderStateId) {
        this.orderStateId = orderStateId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrderStateText")
    public String orderStateText;

    public RechnungsdruckWebAppControllersApiOrder withOrderStateText(String orderStateText) {
        this.orderStateText = orderStateText;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("PaidAt")
    public OffsetDateTime paidAt;

    public RechnungsdruckWebAppControllersApiOrder withPaidAt(OffsetDateTime paidAt) {
        this.paidAt = paidAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ShippedAt")
    public OffsetDateTime shippedAt;

    public RechnungsdruckWebAppControllersApiOrder withShippedAt(OffsetDateTime shippedAt) {
        this.shippedAt = shippedAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShopName")
    public String shopName;

    public RechnungsdruckWebAppControllersApiOrder withShopName(String shopName) {
        this.shopName = shopName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalGross")
    public Double totalGross;

    public RechnungsdruckWebAppControllersApiOrder withTotalGross(Double totalGross) {
        this.totalGross = totalGross;
        return this;
    }
    
    public RechnungsdruckWebAppControllersApiOrder(){}
}
