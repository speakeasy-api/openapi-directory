package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTftpSessionReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTftpSessionReadPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=srcfile")
    public String srcfile;
    public ProtocolTftpSessionReadPathParams withSrcfile(String srcfile) {
        this.srcfile = srcfile;
        return this;
    }
}