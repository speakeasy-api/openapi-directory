<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * JobFlowInstancesConfig - A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class JobFlowInstancesConfig
{
    /**
     * $additionalMasterSecurityGroups
     * 
     * @var ?array<string> $additionalMasterSecurityGroups
     */
	#[\JMS\Serializer\Annotation\SerializedName('AdditionalMasterSecurityGroups')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $additionalMasterSecurityGroups = null;
    
    /**
     * $additionalSlaveSecurityGroups
     * 
     * @var ?array<string> $additionalSlaveSecurityGroups
     */
	#[\JMS\Serializer\Annotation\SerializedName('AdditionalSlaveSecurityGroups')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $additionalSlaveSecurityGroups = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Ec2KeyName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $ec2KeyName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Ec2SubnetId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $ec2SubnetId = null;
    
    /**
     * $ec2SubnetIds
     * 
     * @var ?array<string> $ec2SubnetIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('Ec2SubnetIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $ec2SubnetIds = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EmrManagedMasterSecurityGroup')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $emrManagedMasterSecurityGroup = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EmrManagedSlaveSecurityGroup')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $emrManagedSlaveSecurityGroup = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('HadoopVersion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $hadoopVersion = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('InstanceCount')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $instanceCount = null;
    
    /**
     * $instanceFleets
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\InstanceFleetConfig> $instanceFleets
     */
	#[\JMS\Serializer\Annotation\SerializedName('InstanceFleets')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\InstanceFleetConfig>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $instanceFleets = null;
    
    /**
     * $instanceGroups
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfig> $instanceGroups
     */
	#[\JMS\Serializer\Annotation\SerializedName('InstanceGroups')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfig>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $instanceGroups = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('KeepJobFlowAliveWhenNoSteps')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $keepJobFlowAliveWhenNoSteps = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('MasterInstanceType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $masterInstanceType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Placement')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PlacementType')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PlacementType $placement = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ServiceAccessSecurityGroup')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceAccessSecurityGroup = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SlaveInstanceType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $slaveInstanceType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TerminationProtected')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $terminationProtected = null;
    
	public function __construct()
	{
		$this->additionalMasterSecurityGroups = null;
		$this->additionalSlaveSecurityGroups = null;
		$this->ec2KeyName = null;
		$this->ec2SubnetId = null;
		$this->ec2SubnetIds = null;
		$this->emrManagedMasterSecurityGroup = null;
		$this->emrManagedSlaveSecurityGroup = null;
		$this->hadoopVersion = null;
		$this->instanceCount = null;
		$this->instanceFleets = null;
		$this->instanceGroups = null;
		$this->keepJobFlowAliveWhenNoSteps = null;
		$this->masterInstanceType = null;
		$this->placement = null;
		$this->serviceAccessSecurityGroup = null;
		$this->slaveInstanceType = null;
		$this->terminationProtected = null;
	}
}
