package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class PayrollsFilter {
    @SpeakeasyMetadata("queryParam:name=end_date")
    public String endDate;
    public PayrollsFilter withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=start_date")
    public String startDate;
    public PayrollsFilter withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}