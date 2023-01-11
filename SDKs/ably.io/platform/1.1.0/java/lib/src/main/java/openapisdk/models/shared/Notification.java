package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class Notification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
@SpeakeasyMetadata("form:name=body")
    public String body;
    public Notification withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collapseKey")
@SpeakeasyMetadata("form:name=collapseKey")
    public String collapseKey;
    public Notification withCollapseKey(String collapseKey) {
        this.collapseKey = collapseKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon")
@SpeakeasyMetadata("form:name=icon")
    public String icon;
    public Notification withIcon(String icon) {
        this.icon = icon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sound")
@SpeakeasyMetadata("form:name=sound")
    public String sound;
    public Notification withSound(String sound) {
        this.sound = sound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
@SpeakeasyMetadata("form:name=title")
    public String title;
    public Notification withTitle(String title) {
        this.title = title;
        return this;
    }
}