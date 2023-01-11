package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayrollsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payroll_id")
    public String payrollId;
    public PayrollsOnePathParams withPayrollId(String payrollId) {
        this.payrollId = payrollId;
        return this;
    }
}