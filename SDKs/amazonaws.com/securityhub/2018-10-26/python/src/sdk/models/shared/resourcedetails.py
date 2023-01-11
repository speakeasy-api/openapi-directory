import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsapigatewayrestapidetails as shared_awsapigatewayrestapidetails
from ..shared import awsapigatewaystagedetails as shared_awsapigatewaystagedetails
from ..shared import awsapigatewayv2apidetails as shared_awsapigatewayv2apidetails
from ..shared import awsapigatewayv2stagedetails as shared_awsapigatewayv2stagedetails
from ..shared import awsautoscalingautoscalinggroupdetails as shared_awsautoscalingautoscalinggroupdetails
from ..shared import awsautoscalinglaunchconfigurationdetails as shared_awsautoscalinglaunchconfigurationdetails
from ..shared import awscertificatemanagercertificatedetails as shared_awscertificatemanagercertificatedetails
from ..shared import awscloudfrontdistributiondetails as shared_awscloudfrontdistributiondetails
from ..shared import awscloudtrailtraildetails as shared_awscloudtrailtraildetails
from ..shared import awscodebuildprojectdetails as shared_awscodebuildprojectdetails
from ..shared import awsdynamodbtabledetails as shared_awsdynamodbtabledetails
from ..shared import awsec2eipdetails as shared_awsec2eipdetails
from ..shared import awsec2instancedetails as shared_awsec2instancedetails
from ..shared import awsec2networkacldetails as shared_awsec2networkacldetails
from ..shared import awsec2networkinterfacedetails as shared_awsec2networkinterfacedetails
from ..shared import awsec2securitygroupdetails as shared_awsec2securitygroupdetails
from ..shared import awsec2subnetdetails as shared_awsec2subnetdetails
from ..shared import awsec2volumedetails as shared_awsec2volumedetails
from ..shared import awsec2vpcdetails as shared_awsec2vpcdetails
from ..shared import awsec2vpnconnectiondetails as shared_awsec2vpnconnectiondetails
from ..shared import awsecrcontainerimagedetails as shared_awsecrcontainerimagedetails
from ..shared import awsecsclusterdetails as shared_awsecsclusterdetails
from ..shared import awsecsservicedetails as shared_awsecsservicedetails
from ..shared import awsecstaskdefinitiondetails as shared_awsecstaskdefinitiondetails
from ..shared import awselasticbeanstalkenvironmentdetails as shared_awselasticbeanstalkenvironmentdetails
from ..shared import awselasticsearchdomaindetails as shared_awselasticsearchdomaindetails
from ..shared import awselbloadbalancerdetails as shared_awselbloadbalancerdetails
from ..shared import awselbv2loadbalancerdetails as shared_awselbv2loadbalancerdetails
from ..shared import awsiamaccesskeydetails as shared_awsiamaccesskeydetails
from ..shared import awsiamgroupdetails as shared_awsiamgroupdetails
from ..shared import awsiampolicydetails as shared_awsiampolicydetails
from ..shared import awsiamroledetails as shared_awsiamroledetails
from ..shared import awsiamuserdetails as shared_awsiamuserdetails
from ..shared import awskmskeydetails as shared_awskmskeydetails
from ..shared import awslambdafunctiondetails as shared_awslambdafunctiondetails
from ..shared import awslambdalayerversiondetails as shared_awslambdalayerversiondetails
from ..shared import awsrdsdbclusterdetails as shared_awsrdsdbclusterdetails
from ..shared import awsrdsdbclustersnapshotdetails as shared_awsrdsdbclustersnapshotdetails
from ..shared import awsrdsdbinstancedetails as shared_awsrdsdbinstancedetails
from ..shared import awsrdsdbsnapshotdetails as shared_awsrdsdbsnapshotdetails
from ..shared import awsrdseventsubscriptiondetails as shared_awsrdseventsubscriptiondetails
from ..shared import awsredshiftclusterdetails as shared_awsredshiftclusterdetails
from ..shared import awss3accountpublicaccessblockdetails as shared_awss3accountpublicaccessblockdetails
from ..shared import awss3bucketdetails as shared_awss3bucketdetails
from ..shared import awss3objectdetails as shared_awss3objectdetails
from ..shared import awssecretsmanagersecretdetails as shared_awssecretsmanagersecretdetails
from ..shared import awssnstopicdetails as shared_awssnstopicdetails
from ..shared import awssqsqueuedetails as shared_awssqsqueuedetails
from ..shared import awsssmpatchcompliancedetails as shared_awsssmpatchcompliancedetails
from ..shared import awswafwebacldetails as shared_awswafwebacldetails
from ..shared import containerdetails as shared_containerdetails


@dataclass_json
@dataclasses.dataclass
class ResourceDetails:
    r"""ResourceDetails
    <p>Additional details about a resource related to a finding.</p> <p>To provide the details, use the object that corresponds to the resource type. For example, if the resource type is <code>AwsEc2Instance</code>, then you use the <code>AwsEc2Instance</code> object to provide the details.</p> <p>If the type-specific object does not contain all of the fields you want to populate, then you use the <code>Other</code> object to populate those additional fields.</p> <p>You also use the <code>Other</code> object to populate the details when the selected type does not have a corresponding object.</p>
    """
    
    aws_api_gateway_rest_api: Optional[shared_awsapigatewayrestapidetails.AwsAPIGatewayRestAPIDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsApiGatewayRestApi') }})
    aws_api_gateway_stage: Optional[shared_awsapigatewaystagedetails.AwsAPIGatewayStageDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsApiGatewayStage') }})
    aws_api_gateway_v2_api: Optional[shared_awsapigatewayv2apidetails.AwsAPIGatewayV2APIDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsApiGatewayV2Api') }})
    aws_api_gateway_v2_stage: Optional[shared_awsapigatewayv2stagedetails.AwsAPIGatewayV2StageDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsApiGatewayV2Stage') }})
    aws_auto_scaling_auto_scaling_group: Optional[shared_awsautoscalingautoscalinggroupdetails.AwsAutoScalingAutoScalingGroupDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsAutoScalingAutoScalingGroup') }})
    aws_auto_scaling_launch_configuration: Optional[shared_awsautoscalinglaunchconfigurationdetails.AwsAutoScalingLaunchConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsAutoScalingLaunchConfiguration') }})
    aws_certificate_manager_certificate: Optional[shared_awscertificatemanagercertificatedetails.AwsCertificateManagerCertificateDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsCertificateManagerCertificate') }})
    aws_cloud_front_distribution: Optional[shared_awscloudfrontdistributiondetails.AwsCloudFrontDistributionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsCloudFrontDistribution') }})
    aws_cloud_trail_trail: Optional[shared_awscloudtrailtraildetails.AwsCloudTrailTrailDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsCloudTrailTrail') }})
    aws_code_build_project: Optional[shared_awscodebuildprojectdetails.AwsCodeBuildProjectDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsCodeBuildProject') }})
    aws_dynamo_db_table: Optional[shared_awsdynamodbtabledetails.AwsDynamoDbTableDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsDynamoDbTable') }})
    aws_ec2_eip: Optional[shared_awsec2eipdetails.AwsEc2EipDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2Eip') }})
    aws_ec2_instance: Optional[shared_awsec2instancedetails.AwsEc2InstanceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2Instance') }})
    aws_ec2_network_acl: Optional[shared_awsec2networkacldetails.AwsEc2NetworkACLDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2NetworkAcl') }})
    aws_ec2_network_interface: Optional[shared_awsec2networkinterfacedetails.AwsEc2NetworkInterfaceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2NetworkInterface') }})
    aws_ec2_security_group: Optional[shared_awsec2securitygroupdetails.AwsEc2SecurityGroupDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2SecurityGroup') }})
    aws_ec2_subnet: Optional[shared_awsec2subnetdetails.AwsEc2SubnetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2Subnet') }})
    aws_ec2_volume: Optional[shared_awsec2volumedetails.AwsEc2VolumeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2Volume') }})
    aws_ec2_vpc: Optional[shared_awsec2vpcdetails.AwsEc2VpcDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2Vpc') }})
    aws_ec2_vpn_connection: Optional[shared_awsec2vpnconnectiondetails.AwsEc2VpnConnectionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2VpnConnection') }})
    aws_ecr_container_image: Optional[shared_awsecrcontainerimagedetails.AwsEcrContainerImageDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEcrContainerImage') }})
    aws_ecs_cluster: Optional[shared_awsecsclusterdetails.AwsEcsClusterDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEcsCluster') }})
    aws_ecs_service: Optional[shared_awsecsservicedetails.AwsEcsServiceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEcsService') }})
    aws_ecs_task_definition: Optional[shared_awsecstaskdefinitiondetails.AwsEcsTaskDefinitionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEcsTaskDefinition') }})
    aws_elastic_beanstalk_environment: Optional[shared_awselasticbeanstalkenvironmentdetails.AwsElasticBeanstalkEnvironmentDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsElasticBeanstalkEnvironment') }})
    aws_elasticsearch_domain: Optional[shared_awselasticsearchdomaindetails.AwsElasticsearchDomainDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsElasticsearchDomain') }})
    aws_elb_load_balancer: Optional[shared_awselbloadbalancerdetails.AwsElbLoadBalancerDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsElbLoadBalancer') }})
    aws_elbv2_load_balancer: Optional[shared_awselbv2loadbalancerdetails.AwsElbv2LoadBalancerDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsElbv2LoadBalancer') }})
    aws_iam_access_key: Optional[shared_awsiamaccesskeydetails.AwsIamAccessKeyDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsIamAccessKey') }})
    aws_iam_group: Optional[shared_awsiamgroupdetails.AwsIamGroupDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsIamGroup') }})
    aws_iam_policy: Optional[shared_awsiampolicydetails.AwsIamPolicyDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsIamPolicy') }})
    aws_iam_role: Optional[shared_awsiamroledetails.AwsIamRoleDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsIamRole') }})
    aws_iam_user: Optional[shared_awsiamuserdetails.AwsIamUserDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsIamUser') }})
    aws_kms_key: Optional[shared_awskmskeydetails.AwsKmsKeyDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsKmsKey') }})
    aws_lambda_function: Optional[shared_awslambdafunctiondetails.AwsLambdaFunctionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsLambdaFunction') }})
    aws_lambda_layer_version: Optional[shared_awslambdalayerversiondetails.AwsLambdaLayerVersionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsLambdaLayerVersion') }})
    aws_rds_db_cluster: Optional[shared_awsrdsdbclusterdetails.AwsRdsDbClusterDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRdsDbCluster') }})
    aws_rds_db_cluster_snapshot: Optional[shared_awsrdsdbclustersnapshotdetails.AwsRdsDbClusterSnapshotDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRdsDbClusterSnapshot') }})
    aws_rds_db_instance: Optional[shared_awsrdsdbinstancedetails.AwsRdsDbInstanceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRdsDbInstance') }})
    aws_rds_db_snapshot: Optional[shared_awsrdsdbsnapshotdetails.AwsRdsDbSnapshotDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRdsDbSnapshot') }})
    aws_rds_event_subscription: Optional[shared_awsrdseventsubscriptiondetails.AwsRdsEventSubscriptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRdsEventSubscription') }})
    aws_redshift_cluster: Optional[shared_awsredshiftclusterdetails.AwsRedshiftClusterDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRedshiftCluster') }})
    aws_s3_account_public_access_block: Optional[shared_awss3accountpublicaccessblockdetails.AwsS3AccountPublicAccessBlockDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsS3AccountPublicAccessBlock') }})
    aws_s3_bucket: Optional[shared_awss3bucketdetails.AwsS3BucketDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsS3Bucket') }})
    aws_s3_object: Optional[shared_awss3objectdetails.AwsS3ObjectDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsS3Object') }})
    aws_secrets_manager_secret: Optional[shared_awssecretsmanagersecretdetails.AwsSecretsManagerSecretDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsSecretsManagerSecret') }})
    aws_sns_topic: Optional[shared_awssnstopicdetails.AwsSnsTopicDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsSnsTopic') }})
    aws_sqs_queue: Optional[shared_awssqsqueuedetails.AwsSqsQueueDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsSqsQueue') }})
    aws_ssm_patch_compliance: Optional[shared_awsssmpatchcompliancedetails.AwsSsmPatchComplianceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsSsmPatchCompliance') }})
    aws_waf_web_acl: Optional[shared_awswafwebacldetails.AwsWafWebACLDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsWafWebAcl') }})
    container: Optional[shared_containerdetails.ContainerDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    other: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Other') }})
    
