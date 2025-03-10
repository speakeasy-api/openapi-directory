<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GETComposeEnvironmentsRequest
{
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Action')]
    public GETComposeEnvironmentsActionEnum $action;
    
    /**
     * The name of the application to which the specified source bundles belong.
     * 
     * @var ?string $applicationName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=ApplicationName')]
    public ?string $applicationName = null;
    
    /**
     * The name of the group to which the target environments belong. Specify a group name only if the environment name defined in each target environment's manifest ends with a + (plus) character. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.
     * 
     * @var ?string $groupName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=GroupName')]
    public ?string $groupName = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Version')]
    public GETComposeEnvironmentsVersionEnum $version;
    
    /**
     * A list of version labels, specifying one or more application source bundles that belong to the target application. Each source bundle must include an environment manifest that specifies the name of the environment and the name of the solution stack to use, and optionally can specify environment links to create.
     * 
     * @var ?array<string> $versionLabels
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=VersionLabels')]
    public ?array $versionLabels = null;
    
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
		$this->action = \OpenAPI\OpenAPI\Models\Operations\GETComposeEnvironmentsActionEnum::COMPOSE_ENVIRONMENTS;
		$this->applicationName = null;
		$this->groupName = null;
		$this->version = \OpenAPI\OpenAPI\Models\Operations\GETComposeEnvironmentsVersionEnum::TWO_THOUSAND_AND_TEN1201;
		$this->versionLabels = null;
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
	}
}
