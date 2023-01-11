package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllKeys200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllKeys200ApplicationJsonLinks links;
    public ListAllKeys200ApplicationJson withLinks(ListAllKeys200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAllKeys200ApplicationJsonMeta meta;
    public ListAllKeys200ApplicationJson withMeta(ListAllKeys200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssh_keys")
    public ListAllKeys200ApplicationJsonSshKeys[] sshKeys;
    public ListAllKeys200ApplicationJson withSshKeys(ListAllKeys200ApplicationJsonSshKeys[] sshKeys) {
        this.sshKeys = sshKeys;
        return this;
    }
}