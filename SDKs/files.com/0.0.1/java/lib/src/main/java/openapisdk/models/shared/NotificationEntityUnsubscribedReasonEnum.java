package openapisdk.models.shared;


public enum NotificationEntityUnsubscribedReasonEnum {
    NONE("none"),
    UNSUBSCRIBE_LINK_CLICKED("unsubscribe_link_clicked"),
    MAIL_BOUNCED("mail_bounced"),
    MAIL_MARKED_AS_SPAM("mail_marked_as_spam");

    public final String value;

    private NotificationEntityUnsubscribedReasonEnum(String value) {
        this.value = value;
    }
}
