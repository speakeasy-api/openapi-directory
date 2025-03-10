<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Revision - Revision detail data for a commit and push that activates a sync attempt
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Revision
{
	#[\JMS\Serializer\Annotation\SerializedName('branch')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $branch;
    
	#[\JMS\Serializer\Annotation\SerializedName('directory')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $directory;
    
	#[\JMS\Serializer\Annotation\SerializedName('repositoryName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $repositoryName;
    
	#[\JMS\Serializer\Annotation\SerializedName('repositoryProvider')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum>')]
    public RepositoryProviderEnum $repositoryProvider;
    
	#[\JMS\Serializer\Annotation\SerializedName('sha')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $sha;
    
	public function __construct()
	{
		$this->branch = "";
		$this->directory = "";
		$this->repositoryName = "";
		$this->repositoryProvider = \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum::GITHUB;
		$this->sha = "";
	}
}
