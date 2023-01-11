package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CfgLoadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cfgFile")
    public String cfgFile;
    public CfgLoadPathParams withCfgFile(String cfgFile) {
        this.cfgFile = cfgFile;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstAgentNum")
    public Integer firstAgentNum;
    public CfgLoadPathParams withFirstAgentNum(Integer firstAgentNum) {
        this.firstAgentNum = firstAgentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lastAgentNum")
    public Integer lastAgentNum;
    public CfgLoadPathParams withLastAgentNum(Integer lastAgentNum) {
        this.lastAgentNum = lastAgentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=startAgentNum")
    public Integer startAgentNum;
    public CfgLoadPathParams withStartAgentNum(Integer startAgentNum) {
        this.startAgentNum = startAgentNum;
        return this;
    }
}