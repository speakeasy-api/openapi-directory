package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * TemplateMetadata
 * Contains information about an email template.
**/
public class TemplateMetadata {
    public OffsetDateTime createdTimestamp;
    public TemplateMetadata withCreatedTimestamp(OffsetDateTime createdTimestamp) {
        this.createdTimestamp = createdTimestamp;
        return this;
    }
    public String name;
    public TemplateMetadata withName(String name) {
        this.name = name;
        return this;
    }
}