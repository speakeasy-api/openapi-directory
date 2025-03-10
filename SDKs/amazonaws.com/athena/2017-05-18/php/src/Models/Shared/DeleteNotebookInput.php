<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DeleteNotebookInput
{
	#[\JMS\Serializer\Annotation\SerializedName('NotebookId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $notebookId;
    
	public function __construct()
	{
		$this->notebookId = "";
	}
}
