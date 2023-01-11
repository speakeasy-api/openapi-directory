package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Status200ApplicationJsonLastHandshake
 * Structure holding detailed information about the connection
**/
public class Status200ApplicationJsonLastHandshake {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agent")
    public String agent;
    public Status200ApplicationJsonLastHandshake withAgent(String agent) {
        this.agent = agent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chain_id")
    public String chainId;
    public Status200ApplicationJsonLastHandshake withChainId(String chainId) {
        this.chainId = chainId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generation")
    public Long generation;
    public Status200ApplicationJsonLastHandshake withGeneration(Long generation) {
        this.generation = generation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("head_id")
    public String headId;
    public Status200ApplicationJsonLastHandshake withHeadId(String headId) {
        this.headId = headId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("head_num")
    public Long headNum;
    public Status200ApplicationJsonLastHandshake withHeadNum(Long headNum) {
        this.headNum = headNum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public Status200ApplicationJsonLastHandshake withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_irreversible_block_id")
    public String lastIrreversibleBlockId;
    public Status200ApplicationJsonLastHandshake withLastIrreversibleBlockId(String lastIrreversibleBlockId) {
        this.lastIrreversibleBlockId = lastIrreversibleBlockId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_irreversible_block_num")
    public Long lastIrreversibleBlockNum;
    public Status200ApplicationJsonLastHandshake withLastIrreversibleBlockNum(Long lastIrreversibleBlockNum) {
        this.lastIrreversibleBlockNum = lastIrreversibleBlockNum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_version")
    public Long networkVersion;
    public Status200ApplicationJsonLastHandshake withNetworkVersion(Long networkVersion) {
        this.networkVersion = networkVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node_id")
    public String nodeId;
    public Status200ApplicationJsonLastHandshake withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os")
    public String os;
    public Status200ApplicationJsonLastHandshake withOs(String os) {
        this.os = os;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p2p_address")
    public String p2pAddress;
    public Status200ApplicationJsonLastHandshake withP2pAddress(String p2pAddress) {
        this.p2pAddress = p2pAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sig")
    public String sig;
    public Status200ApplicationJsonLastHandshake withSig(String sig) {
        this.sig = sig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public String time;
    public Status200ApplicationJsonLastHandshake withTime(String time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public Status200ApplicationJsonLastHandshake withToken(String token) {
        this.token = token;
        return this;
    }
}