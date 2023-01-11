package openapisdk.models.shared;



public class ModifyVpcPeeringConnectionOptionsResult {
    public ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions accepterPeeringConnectionOptions;
    public ModifyVpcPeeringConnectionOptionsResult withAccepterPeeringConnectionOptions(ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions accepterPeeringConnectionOptions) {
        this.accepterPeeringConnectionOptions = accepterPeeringConnectionOptions;
        return this;
    }
    public ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions requesterPeeringConnectionOptions;
    public ModifyVpcPeeringConnectionOptionsResult withRequesterPeeringConnectionOptions(ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions requesterPeeringConnectionOptions) {
        this.requesterPeeringConnectionOptions = requesterPeeringConnectionOptions;
        return this;
    }
}