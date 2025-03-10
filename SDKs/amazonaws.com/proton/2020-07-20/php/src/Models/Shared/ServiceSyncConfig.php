<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ServiceSyncConfig - Detailed data of the service sync configuration.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ServiceSyncConfig
{
	#[\JMS\Serializer\Annotation\SerializedName('branch')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $branch;
    
	#[\JMS\Serializer\Annotation\SerializedName('filePath')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $filePath;
    
	#[\JMS\Serializer\Annotation\SerializedName('repositoryName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $repositoryName;
    
	#[\JMS\Serializer\Annotation\SerializedName('repositoryProvider')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum>')]
    public RepositoryProviderEnum $repositoryProvider;
    
	#[\JMS\Serializer\Annotation\SerializedName('serviceName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $serviceName;
    
	public function __construct()
	{
		$this->branch = "";
		$this->filePath = "";
		$this->repositoryName = "";
		$this->repositoryProvider = \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum::GITHUB;
		$this->serviceName = "";
	}
}
