package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DataShareAssociation
 * The association of a datashare from a producer account with a data consumer. 
**/
public class DataShareAssociation {
    public String consumerIdentifier;
    public DataShareAssociation withConsumerIdentifier(String consumerIdentifier) {
        this.consumerIdentifier = consumerIdentifier;
        return this;
    }
    public OffsetDateTime createdDate;
    public DataShareAssociation withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    public DataShareStatusEnum status;
    public DataShareAssociation withStatus(DataShareStatusEnum status) {
        this.status = status;
        return this;
    }
    public OffsetDateTime statusChangeDate;
    public DataShareAssociation withStatusChangeDate(OffsetDateTime statusChangeDate) {
        this.statusChangeDate = statusChangeDate;
        return this;
    }
}