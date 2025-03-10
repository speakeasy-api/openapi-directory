<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DeleteBranchInput - Represents the input of a delete branch operation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DeleteBranchInput
{
	#[\JMS\Serializer\Annotation\SerializedName('branchName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $branchName;
    
	#[\JMS\Serializer\Annotation\SerializedName('repositoryName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $repositoryName;
    
	public function __construct()
	{
		$this->branchName = "";
		$this->repositoryName = "";
	}
}
