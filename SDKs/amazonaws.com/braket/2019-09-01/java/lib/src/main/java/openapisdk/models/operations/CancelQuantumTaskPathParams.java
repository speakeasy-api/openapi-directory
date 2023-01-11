package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelQuantumTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=quantumTaskArn")
    public String quantumTaskArn;
    public CancelQuantumTaskPathParams withQuantumTaskArn(String quantumTaskArn) {
        this.quantumTaskArn = quantumTaskArn;
        return this;
    }
}