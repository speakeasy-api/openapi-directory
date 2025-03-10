<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Tag - Tag
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Tag
{
	#[\JMS\Serializer\Annotation\SerializedName('commit')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TagCommit')]
    public TagCommit $commit;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('node_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $nodeId;
    
	#[\JMS\Serializer\Annotation\SerializedName('tarball_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $tarballUrl;
    
	#[\JMS\Serializer\Annotation\SerializedName('zipball_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $zipballUrl;
    
	public function __construct()
	{
		$this->commit = new \OpenAPI\OpenAPI\Models\Shared\TagCommit();
		$this->name = "";
		$this->nodeId = "";
		$this->tarballUrl = "";
		$this->zipballUrl = "";
	}
}
