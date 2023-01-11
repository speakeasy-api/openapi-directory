package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuantumTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=quantumTaskArn")
    public String quantumTaskArn;
    public GetQuantumTaskPathParams withQuantumTaskArn(String quantumTaskArn) {
        this.quantumTaskArn = quantumTaskArn;
        return this;
    }
}