package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agents")
    public String agents;
    public AccessAddPathParams withAgents(String agents) {
        this.agents = agents;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mask")
    public String mask;
    public AccessAddPathParams withMask(String mask) {
        this.mask = mask;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public AccessAddPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}