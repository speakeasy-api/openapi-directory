/**
 * The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the <code>SendEmail</code> or <code>SendRawEmail</code> API, choose <code>messageTag</code>. To use your own email headers, choose <code>emailHeader</code>. To use link tags, choose <code>linkTags</code>.
 */
export declare enum DimensionValueSourceEnum {
    MessageTag = "MESSAGE_TAG",
    EmailHeader = "EMAIL_HEADER",
    LinkTag = "LINK_TAG"
}
