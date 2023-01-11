package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSellerStandardsProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cycle")
    public String cycle;
    public GetSellerStandardsProfilePathParams withCycle(String cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=program")
    public String program;
    public GetSellerStandardsProfilePathParams withProgram(String program) {
        this.program = program;
        return this;
    }
}