package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLastBlockNumber {
    @JsonProperty("blocknumber")
    public Integer blocknumber;
    public GetLastBlockNumber withBlocknumber(Integer blocknumber) {
        this.blocknumber = blocknumber;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public GetLastBlockNumber withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
}