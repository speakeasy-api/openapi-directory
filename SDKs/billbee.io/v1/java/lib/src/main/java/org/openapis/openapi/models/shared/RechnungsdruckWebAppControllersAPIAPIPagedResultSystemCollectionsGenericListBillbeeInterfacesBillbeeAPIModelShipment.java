/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment - OK
 */
public class RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public BillbeeInterfacesBillbeeAPIModelShipment[] data;

    public RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment withData(BillbeeInterfacesBillbeeAPIModelShipment[] data) {
        this.data = data;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipmentErrorCodeEnum errorCode;

    public RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment withErrorCode(RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipmentErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorDescription")
    public RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipmentErrorDescriptionEnum errorDescription;

    public RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment withErrorDescription(RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipmentErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;

    public RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Paging")
    public RechnungsdruckWebAppControllersAPIAPIPagedResultPagingInformationSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment paging;

    public RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment withPaging(RechnungsdruckWebAppControllersAPIAPIPagedResultPagingInformationSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment paging) {
        this.paging = paging;
        return this;
    }
    
    public RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment(){}
}
