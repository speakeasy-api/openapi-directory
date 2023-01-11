package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CfgSaveasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cfgFile")
    public String cfgFile;
    public CfgSaveasPathParams withCfgFile(String cfgFile) {
        this.cfgFile = cfgFile;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstAgentNum")
    public Integer firstAgentNum;
    public CfgSaveasPathParams withFirstAgentNum(Integer firstAgentNum) {
        this.firstAgentNum = firstAgentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lastAgentNum")
    public Integer lastAgentNum;
    public CfgSaveasPathParams withLastAgentNum(Integer lastAgentNum) {
        this.lastAgentNum = lastAgentNum;
        return this;
    }
}