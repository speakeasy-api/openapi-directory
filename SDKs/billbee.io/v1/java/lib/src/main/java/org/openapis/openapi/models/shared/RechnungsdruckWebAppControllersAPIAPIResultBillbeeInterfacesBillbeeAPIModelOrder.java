/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder - The order was created successfully
 */
public class RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder {
    /**
     * A class that represents the Billbee data model of a single order
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public BillbeeInterfacesBillbeeAPIModelOrder data;

    public RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder withData(BillbeeInterfacesBillbeeAPIModelOrder data) {
        this.data = data;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrderErrorCodeEnum errorCode;

    public RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder withErrorCode(RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrderErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorDescription")
    public RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrderErrorDescriptionEnum errorDescription;

    public RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder withErrorDescription(RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrderErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;

    public RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    
    public RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder(){}
}
