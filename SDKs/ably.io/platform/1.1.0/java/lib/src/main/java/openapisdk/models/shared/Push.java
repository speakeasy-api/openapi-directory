package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class Push {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apns")
@SpeakeasyMetadata("form:name=apns")
    public PushApns apns;
    public Push withApns(PushApns apns) {
        this.apns = apns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
@SpeakeasyMetadata("form:name=data")
    public String data;
    public Push withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fcm")
@SpeakeasyMetadata("form:name=fcm")
    public PushFcm fcm;
    public Push withFcm(PushFcm fcm) {
        this.fcm = fcm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification")
@SpeakeasyMetadata("form:name=notification")
    public Notification notification;
    public Push withNotification(Notification notification) {
        this.notification = notification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("web")
@SpeakeasyMetadata("form:name=web")
    public PushWeb web;
    public Push withWeb(PushWeb web) {
        this.web = web;
        return this;
    }
}