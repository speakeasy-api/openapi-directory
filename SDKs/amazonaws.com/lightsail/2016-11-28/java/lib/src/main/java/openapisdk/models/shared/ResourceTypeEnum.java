package openapisdk.models.shared;


public enum ResourceTypeEnum {
    CONTAINER_SERVICE("ContainerService"),
    INSTANCE("Instance"),
    STATIC_IP("StaticIp"),
    KEY_PAIR("KeyPair"),
    INSTANCE_SNAPSHOT("InstanceSnapshot"),
    DOMAIN("Domain"),
    PEERED_VPC("PeeredVpc"),
    LOAD_BALANCER("LoadBalancer"),
    LOAD_BALANCER_TLS_CERTIFICATE("LoadBalancerTlsCertificate"),
    DISK("Disk"),
    DISK_SNAPSHOT("DiskSnapshot"),
    RELATIONAL_DATABASE("RelationalDatabase"),
    RELATIONAL_DATABASE_SNAPSHOT("RelationalDatabaseSnapshot"),
    EXPORT_SNAPSHOT_RECORD("ExportSnapshotRecord"),
    CLOUD_FORMATION_STACK_RECORD("CloudFormationStackRecord"),
    ALARM("Alarm"),
    CONTACT_METHOD("ContactMethod"),
    DISTRIBUTION("Distribution"),
    CERTIFICATE("Certificate"),
    BUCKET("Bucket");

    public final String value;

    private ResourceTypeEnum(String value) {
        this.value = value;
    }
}
