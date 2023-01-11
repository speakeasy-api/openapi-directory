package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolNetflowSetCollectorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolNetflowSetCollectorPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collectorIP")
    public String collectorIP;
    public ProtocolNetflowSetCollectorPathParams withCollectorIp(String collectorIP) {
        this.collectorIP = collectorIP;
        return this;
    }
}