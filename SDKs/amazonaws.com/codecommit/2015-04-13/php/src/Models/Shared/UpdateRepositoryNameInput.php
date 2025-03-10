<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * UpdateRepositoryNameInput - Represents the input of an update repository description operation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class UpdateRepositoryNameInput
{
	#[\JMS\Serializer\Annotation\SerializedName('newName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $newName;
    
	#[\JMS\Serializer\Annotation\SerializedName('oldName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $oldName;
    
	public function __construct()
	{
		$this->newName = "";
		$this->oldName = "";
	}
}
