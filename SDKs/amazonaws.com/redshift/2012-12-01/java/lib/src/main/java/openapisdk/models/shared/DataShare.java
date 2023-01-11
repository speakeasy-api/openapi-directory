package openapisdk.models.shared;



public class DataShare {
    public Boolean allowPubliclyAccessibleConsumers;
    public DataShare withAllowPubliclyAccessibleConsumers(Boolean allowPubliclyAccessibleConsumers) {
        this.allowPubliclyAccessibleConsumers = allowPubliclyAccessibleConsumers;
        return this;
    }
    public String dataShareArn;
    public DataShare withDataShareArn(String dataShareArn) {
        this.dataShareArn = dataShareArn;
        return this;
    }
    public DataShareAssociation[] dataShareAssociations;
    public DataShare withDataShareAssociations(DataShareAssociation[] dataShareAssociations) {
        this.dataShareAssociations = dataShareAssociations;
        return this;
    }
    public String producerArn;
    public DataShare withProducerArn(String producerArn) {
        this.producerArn = producerArn;
        return this;
    }
}