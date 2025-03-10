<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GETEnableAwsNetworkPerformanceMetricSubscriptionRequest
{
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Action')]
    public GETEnableAwsNetworkPerformanceMetricSubscriptionActionEnum $action;
    
    /**
     * The target Region or Availability Zone that the metric subscription is enabled for. For example, <code>eu-west-1</code>.
     * 
     * @var ?string $destination
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Destination')]
    public ?string $destination = null;
    
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     * 
     * @var ?bool $dryRun
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=DryRun')]
    public ?bool $dryRun = null;
    
    /**
     * The metric used for the enabled subscription.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GETEnableAwsNetworkPerformanceMetricSubscriptionMetricEnum $metric
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Metric')]
    public ?GETEnableAwsNetworkPerformanceMetricSubscriptionMetricEnum $metric = null;
    
    /**
     * The source Region or Availability Zone that the metric subscription is enabled for. For example, <code>us-east-1</code>.
     * 
     * @var ?string $source
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Source')]
    public ?string $source = null;
    
    /**
     * The statistic used for the enabled subscription.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GETEnableAwsNetworkPerformanceMetricSubscriptionStatisticEnum $statistic
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Statistic')]
    public ?GETEnableAwsNetworkPerformanceMetricSubscriptionStatisticEnum $statistic = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Version')]
    public GETEnableAwsNetworkPerformanceMetricSubscriptionVersionEnum $version;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Algorithm')]
    public ?string $xAmzAlgorithm = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Content-Sha256')]
    public ?string $xAmzContentSha256 = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Credential')]
    public ?string $xAmzCredential = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Date')]
    public ?string $xAmzDate = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Security-Token')]
    public ?string $xAmzSecurityToken = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Signature')]
    public ?string $xAmzSignature = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-SignedHeaders')]
    public ?string $xAmzSignedHeaders = null;
    
	public function __construct()
	{
		$this->action = \OpenAPI\OpenAPI\Models\Operations\GETEnableAwsNetworkPerformanceMetricSubscriptionActionEnum::ENABLE_AWS_NETWORK_PERFORMANCE_METRIC_SUBSCRIPTION;
		$this->destination = null;
		$this->dryRun = null;
		$this->metric = null;
		$this->source = null;
		$this->statistic = null;
		$this->version = \OpenAPI\OpenAPI\Models\Operations\GETEnableAwsNetworkPerformanceMetricSubscriptionVersionEnum::TWO_THOUSAND_AND_SIXTEEN1115;
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
	}
}
