package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTodGettimePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTodGettimePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=numRetries")
    public Integer numRetries;
    public ProtocolTodGettimePathParams withNumRetries(Integer numRetries) {
        this.numRetries = numRetries;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portNum")
    public Integer portNum;
    public ProtocolTodGettimePathParams withPortNum(Integer portNum) {
        this.portNum = portNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scriptName")
    public String scriptName;
    public ProtocolTodGettimePathParams withScriptName(String scriptName) {
        this.scriptName = scriptName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serverAddr")
    public String serverAddr;
    public ProtocolTodGettimePathParams withServerAddr(String serverAddr) {
        this.serverAddr = serverAddr;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=timeSec")
    public Integer timeSec;
    public ProtocolTodGettimePathParams withTimeSec(Integer timeSec) {
        this.timeSec = timeSec;
        return this;
    }
}