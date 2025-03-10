/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetCommerceRefundsMetricsRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;

    public GetCommerceRefundsMetricsRequest withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connectionId")
    public String connectionId;

    public GetCommerceRefundsMetricsRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    
    /**
     * Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeDisplayNames")
    public Boolean includeDisplayNames;

    public GetCommerceRefundsMetricsRequest withIncludeDisplayNames(Boolean includeDisplayNames) {
        this.includeDisplayNames = includeDisplayNames;
        return this;
    }
    
    /**
     * The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=numberOfPeriods")
    public Long numberOfPeriods;

    public GetCommerceRefundsMetricsRequest withNumberOfPeriods(Long numberOfPeriods) {
        this.numberOfPeriods = numberOfPeriods;
        return this;
    }
    
    /**
     * The number of months per period. E.g. 2 = 2 months per period.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=periodLength")
    public Long periodLength;

    public GetCommerceRefundsMetricsRequest withPeriodLength(Long periodLength) {
        this.periodLength = periodLength;
        return this;
    }
    
    /**
     * The period unit of time returned.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=periodUnit")
    public org.openapis.openapi.models.shared.PeriodUnitEnum periodUnit;

    public GetCommerceRefundsMetricsRequest withPeriodUnit(org.openapis.openapi.models.shared.PeriodUnitEnum periodUnit) {
        this.periodUnit = periodUnit;
        return this;
    }
    
    /**
     * The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reportDate")
    public String reportDate;

    public GetCommerceRefundsMetricsRequest withReportDate(String reportDate) {
        this.reportDate = reportDate;
        return this;
    }
    
    public GetCommerceRefundsMetricsRequest(@JsonProperty("companyId") String companyId, @JsonProperty("connectionId") String connectionId, @JsonProperty("numberOfPeriods") Long numberOfPeriods, @JsonProperty("periodLength") Long periodLength, @JsonProperty("periodUnit") org.openapis.openapi.models.shared.PeriodUnitEnum periodUnit, @JsonProperty("reportDate") String reportDate) {
        this.companyId = companyId;
        this.connectionId = connectionId;
        this.numberOfPeriods = numberOfPeriods;
        this.periodLength = periodLength;
        this.periodUnit = periodUnit;
        this.reportDate = reportDate;
  }
}
