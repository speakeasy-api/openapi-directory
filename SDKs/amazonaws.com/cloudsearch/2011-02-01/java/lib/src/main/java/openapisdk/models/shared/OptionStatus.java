package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * OptionStatus
 * The status of an option, including when it was last updated and whether it is actively in use for searches.
**/
public class OptionStatus {
    public OffsetDateTime creationDate;
    public OptionStatus withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    public Boolean pendingDeletion;
    public OptionStatus withPendingDeletion(Boolean pendingDeletion) {
        this.pendingDeletion = pendingDeletion;
        return this;
    }
    public OptionStateEnum state;
    public OptionStatus withState(OptionStateEnum state) {
        this.state = state;
        return this;
    }
    public OffsetDateTime updateDate;
    public OptionStatus withUpdateDate(OffsetDateTime updateDate) {
        this.updateDate = updateDate;
        return this;
    }
    public Long updateVersion;
    public OptionStatus withUpdateVersion(Long updateVersion) {
        this.updateVersion = updateVersion;
        return this;
    }
}