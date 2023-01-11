package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceDetails
 * <p>Additional details about a resource related to a finding.</p> <p>To provide the details, use the object that corresponds to the resource type. For example, if the resource type is <code>AwsEc2Instance</code>, then you use the <code>AwsEc2Instance</code> object to provide the details.</p> <p>If the type-specific object does not contain all of the fields you want to populate, then you use the <code>Other</code> object to populate those additional fields.</p> <p>You also use the <code>Other</code> object to populate the details when the selected type does not have a corresponding object.</p>
**/
public class ResourceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsApiGatewayRestApi")
    public AwsApiGatewayRestApiDetails awsApiGatewayRestApi;
    public ResourceDetails withAwsApiGatewayRestApi(AwsApiGatewayRestApiDetails awsApiGatewayRestApi) {
        this.awsApiGatewayRestApi = awsApiGatewayRestApi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsApiGatewayStage")
    public AwsApiGatewayStageDetails awsApiGatewayStage;
    public ResourceDetails withAwsApiGatewayStage(AwsApiGatewayStageDetails awsApiGatewayStage) {
        this.awsApiGatewayStage = awsApiGatewayStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsApiGatewayV2Api")
    public AwsApiGatewayV2ApiDetails awsApiGatewayV2Api;
    public ResourceDetails withAwsApiGatewayV2Api(AwsApiGatewayV2ApiDetails awsApiGatewayV2Api) {
        this.awsApiGatewayV2Api = awsApiGatewayV2Api;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsApiGatewayV2Stage")
    public AwsApiGatewayV2StageDetails awsApiGatewayV2Stage;
    public ResourceDetails withAwsApiGatewayV2Stage(AwsApiGatewayV2StageDetails awsApiGatewayV2Stage) {
        this.awsApiGatewayV2Stage = awsApiGatewayV2Stage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsAutoScalingAutoScalingGroup")
    public AwsAutoScalingAutoScalingGroupDetails awsAutoScalingAutoScalingGroup;
    public ResourceDetails withAwsAutoScalingAutoScalingGroup(AwsAutoScalingAutoScalingGroupDetails awsAutoScalingAutoScalingGroup) {
        this.awsAutoScalingAutoScalingGroup = awsAutoScalingAutoScalingGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsAutoScalingLaunchConfiguration")
    public AwsAutoScalingLaunchConfigurationDetails awsAutoScalingLaunchConfiguration;
    public ResourceDetails withAwsAutoScalingLaunchConfiguration(AwsAutoScalingLaunchConfigurationDetails awsAutoScalingLaunchConfiguration) {
        this.awsAutoScalingLaunchConfiguration = awsAutoScalingLaunchConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsCertificateManagerCertificate")
    public AwsCertificateManagerCertificateDetails awsCertificateManagerCertificate;
    public ResourceDetails withAwsCertificateManagerCertificate(AwsCertificateManagerCertificateDetails awsCertificateManagerCertificate) {
        this.awsCertificateManagerCertificate = awsCertificateManagerCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsCloudFrontDistribution")
    public AwsCloudFrontDistributionDetails awsCloudFrontDistribution;
    public ResourceDetails withAwsCloudFrontDistribution(AwsCloudFrontDistributionDetails awsCloudFrontDistribution) {
        this.awsCloudFrontDistribution = awsCloudFrontDistribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsCloudTrailTrail")
    public AwsCloudTrailTrailDetails awsCloudTrailTrail;
    public ResourceDetails withAwsCloudTrailTrail(AwsCloudTrailTrailDetails awsCloudTrailTrail) {
        this.awsCloudTrailTrail = awsCloudTrailTrail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsCodeBuildProject")
    public AwsCodeBuildProjectDetails awsCodeBuildProject;
    public ResourceDetails withAwsCodeBuildProject(AwsCodeBuildProjectDetails awsCodeBuildProject) {
        this.awsCodeBuildProject = awsCodeBuildProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsDynamoDbTable")
    public AwsDynamoDbTableDetails awsDynamoDbTable;
    public ResourceDetails withAwsDynamoDbTable(AwsDynamoDbTableDetails awsDynamoDbTable) {
        this.awsDynamoDbTable = awsDynamoDbTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEc2Eip")
    public AwsEc2EipDetails awsEc2Eip;
    public ResourceDetails withAwsEc2Eip(AwsEc2EipDetails awsEc2Eip) {
        this.awsEc2Eip = awsEc2Eip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEc2Instance")
    public AwsEc2InstanceDetails awsEc2Instance;
    public ResourceDetails withAwsEc2Instance(AwsEc2InstanceDetails awsEc2Instance) {
        this.awsEc2Instance = awsEc2Instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEc2NetworkAcl")
    public AwsEc2NetworkAclDetails awsEc2NetworkAcl;
    public ResourceDetails withAwsEc2NetworkAcl(AwsEc2NetworkAclDetails awsEc2NetworkAcl) {
        this.awsEc2NetworkAcl = awsEc2NetworkAcl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEc2NetworkInterface")
    public AwsEc2NetworkInterfaceDetails awsEc2NetworkInterface;
    public ResourceDetails withAwsEc2NetworkInterface(AwsEc2NetworkInterfaceDetails awsEc2NetworkInterface) {
        this.awsEc2NetworkInterface = awsEc2NetworkInterface;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEc2SecurityGroup")
    public AwsEc2SecurityGroupDetails awsEc2SecurityGroup;
    public ResourceDetails withAwsEc2SecurityGroup(AwsEc2SecurityGroupDetails awsEc2SecurityGroup) {
        this.awsEc2SecurityGroup = awsEc2SecurityGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEc2Subnet")
    public AwsEc2SubnetDetails awsEc2Subnet;
    public ResourceDetails withAwsEc2Subnet(AwsEc2SubnetDetails awsEc2Subnet) {
        this.awsEc2Subnet = awsEc2Subnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEc2Volume")
    public AwsEc2VolumeDetails awsEc2Volume;
    public ResourceDetails withAwsEc2Volume(AwsEc2VolumeDetails awsEc2Volume) {
        this.awsEc2Volume = awsEc2Volume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEc2Vpc")
    public AwsEc2VpcDetails awsEc2Vpc;
    public ResourceDetails withAwsEc2Vpc(AwsEc2VpcDetails awsEc2Vpc) {
        this.awsEc2Vpc = awsEc2Vpc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEc2VpnConnection")
    public AwsEc2VpnConnectionDetails awsEc2VpnConnection;
    public ResourceDetails withAwsEc2VpnConnection(AwsEc2VpnConnectionDetails awsEc2VpnConnection) {
        this.awsEc2VpnConnection = awsEc2VpnConnection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEcrContainerImage")
    public AwsEcrContainerImageDetails awsEcrContainerImage;
    public ResourceDetails withAwsEcrContainerImage(AwsEcrContainerImageDetails awsEcrContainerImage) {
        this.awsEcrContainerImage = awsEcrContainerImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEcsCluster")
    public AwsEcsClusterDetails awsEcsCluster;
    public ResourceDetails withAwsEcsCluster(AwsEcsClusterDetails awsEcsCluster) {
        this.awsEcsCluster = awsEcsCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEcsService")
    public AwsEcsServiceDetails awsEcsService;
    public ResourceDetails withAwsEcsService(AwsEcsServiceDetails awsEcsService) {
        this.awsEcsService = awsEcsService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEcsTaskDefinition")
    public AwsEcsTaskDefinitionDetails awsEcsTaskDefinition;
    public ResourceDetails withAwsEcsTaskDefinition(AwsEcsTaskDefinitionDetails awsEcsTaskDefinition) {
        this.awsEcsTaskDefinition = awsEcsTaskDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsElasticBeanstalkEnvironment")
    public AwsElasticBeanstalkEnvironmentDetails awsElasticBeanstalkEnvironment;
    public ResourceDetails withAwsElasticBeanstalkEnvironment(AwsElasticBeanstalkEnvironmentDetails awsElasticBeanstalkEnvironment) {
        this.awsElasticBeanstalkEnvironment = awsElasticBeanstalkEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsElasticsearchDomain")
    public AwsElasticsearchDomainDetails awsElasticsearchDomain;
    public ResourceDetails withAwsElasticsearchDomain(AwsElasticsearchDomainDetails awsElasticsearchDomain) {
        this.awsElasticsearchDomain = awsElasticsearchDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsElbLoadBalancer")
    public AwsElbLoadBalancerDetails awsElbLoadBalancer;
    public ResourceDetails withAwsElbLoadBalancer(AwsElbLoadBalancerDetails awsElbLoadBalancer) {
        this.awsElbLoadBalancer = awsElbLoadBalancer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsElbv2LoadBalancer")
    public AwsElbv2LoadBalancerDetails awsElbv2LoadBalancer;
    public ResourceDetails withAwsElbv2LoadBalancer(AwsElbv2LoadBalancerDetails awsElbv2LoadBalancer) {
        this.awsElbv2LoadBalancer = awsElbv2LoadBalancer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsIamAccessKey")
    public AwsIamAccessKeyDetails awsIamAccessKey;
    public ResourceDetails withAwsIamAccessKey(AwsIamAccessKeyDetails awsIamAccessKey) {
        this.awsIamAccessKey = awsIamAccessKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsIamGroup")
    public AwsIamGroupDetails awsIamGroup;
    public ResourceDetails withAwsIamGroup(AwsIamGroupDetails awsIamGroup) {
        this.awsIamGroup = awsIamGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsIamPolicy")
    public AwsIamPolicyDetails awsIamPolicy;
    public ResourceDetails withAwsIamPolicy(AwsIamPolicyDetails awsIamPolicy) {
        this.awsIamPolicy = awsIamPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsIamRole")
    public AwsIamRoleDetails awsIamRole;
    public ResourceDetails withAwsIamRole(AwsIamRoleDetails awsIamRole) {
        this.awsIamRole = awsIamRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsIamUser")
    public AwsIamUserDetails awsIamUser;
    public ResourceDetails withAwsIamUser(AwsIamUserDetails awsIamUser) {
        this.awsIamUser = awsIamUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsKmsKey")
    public AwsKmsKeyDetails awsKmsKey;
    public ResourceDetails withAwsKmsKey(AwsKmsKeyDetails awsKmsKey) {
        this.awsKmsKey = awsKmsKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsLambdaFunction")
    public AwsLambdaFunctionDetails awsLambdaFunction;
    public ResourceDetails withAwsLambdaFunction(AwsLambdaFunctionDetails awsLambdaFunction) {
        this.awsLambdaFunction = awsLambdaFunction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsLambdaLayerVersion")
    public AwsLambdaLayerVersionDetails awsLambdaLayerVersion;
    public ResourceDetails withAwsLambdaLayerVersion(AwsLambdaLayerVersionDetails awsLambdaLayerVersion) {
        this.awsLambdaLayerVersion = awsLambdaLayerVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRdsDbCluster")
    public AwsRdsDbClusterDetails awsRdsDbCluster;
    public ResourceDetails withAwsRdsDbCluster(AwsRdsDbClusterDetails awsRdsDbCluster) {
        this.awsRdsDbCluster = awsRdsDbCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRdsDbClusterSnapshot")
    public AwsRdsDbClusterSnapshotDetails awsRdsDbClusterSnapshot;
    public ResourceDetails withAwsRdsDbClusterSnapshot(AwsRdsDbClusterSnapshotDetails awsRdsDbClusterSnapshot) {
        this.awsRdsDbClusterSnapshot = awsRdsDbClusterSnapshot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRdsDbInstance")
    public AwsRdsDbInstanceDetails awsRdsDbInstance;
    public ResourceDetails withAwsRdsDbInstance(AwsRdsDbInstanceDetails awsRdsDbInstance) {
        this.awsRdsDbInstance = awsRdsDbInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRdsDbSnapshot")
    public AwsRdsDbSnapshotDetails awsRdsDbSnapshot;
    public ResourceDetails withAwsRdsDbSnapshot(AwsRdsDbSnapshotDetails awsRdsDbSnapshot) {
        this.awsRdsDbSnapshot = awsRdsDbSnapshot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRdsEventSubscription")
    public AwsRdsEventSubscriptionDetails awsRdsEventSubscription;
    public ResourceDetails withAwsRdsEventSubscription(AwsRdsEventSubscriptionDetails awsRdsEventSubscription) {
        this.awsRdsEventSubscription = awsRdsEventSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRedshiftCluster")
    public AwsRedshiftClusterDetails awsRedshiftCluster;
    public ResourceDetails withAwsRedshiftCluster(AwsRedshiftClusterDetails awsRedshiftCluster) {
        this.awsRedshiftCluster = awsRedshiftCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsS3AccountPublicAccessBlock")
    public AwsS3AccountPublicAccessBlockDetails awsS3AccountPublicAccessBlock;
    public ResourceDetails withAwsS3AccountPublicAccessBlock(AwsS3AccountPublicAccessBlockDetails awsS3AccountPublicAccessBlock) {
        this.awsS3AccountPublicAccessBlock = awsS3AccountPublicAccessBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsS3Bucket")
    public AwsS3BucketDetails awsS3Bucket;
    public ResourceDetails withAwsS3Bucket(AwsS3BucketDetails awsS3Bucket) {
        this.awsS3Bucket = awsS3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsS3Object")
    public AwsS3ObjectDetails awsS3Object;
    public ResourceDetails withAwsS3Object(AwsS3ObjectDetails awsS3Object) {
        this.awsS3Object = awsS3Object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsSecretsManagerSecret")
    public AwsSecretsManagerSecretDetails awsSecretsManagerSecret;
    public ResourceDetails withAwsSecretsManagerSecret(AwsSecretsManagerSecretDetails awsSecretsManagerSecret) {
        this.awsSecretsManagerSecret = awsSecretsManagerSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsSnsTopic")
    public AwsSnsTopicDetails awsSnsTopic;
    public ResourceDetails withAwsSnsTopic(AwsSnsTopicDetails awsSnsTopic) {
        this.awsSnsTopic = awsSnsTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsSqsQueue")
    public AwsSqsQueueDetails awsSqsQueue;
    public ResourceDetails withAwsSqsQueue(AwsSqsQueueDetails awsSqsQueue) {
        this.awsSqsQueue = awsSqsQueue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsSsmPatchCompliance")
    public AwsSsmPatchComplianceDetails awsSsmPatchCompliance;
    public ResourceDetails withAwsSsmPatchCompliance(AwsSsmPatchComplianceDetails awsSsmPatchCompliance) {
        this.awsSsmPatchCompliance = awsSsmPatchCompliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsWafWebAcl")
    public AwsWafWebAclDetails awsWafWebAcl;
    public ResourceDetails withAwsWafWebAcl(AwsWafWebAclDetails awsWafWebAcl) {
        this.awsWafWebAcl = awsWafWebAcl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Container")
    public ContainerDetails container;
    public ResourceDetails withContainer(ContainerDetails container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Other")
    public java.util.Map<String, String> other;
    public ResourceDetails withOther(java.util.Map<String, String> other) {
        this.other = other;
        return this;
    }
}