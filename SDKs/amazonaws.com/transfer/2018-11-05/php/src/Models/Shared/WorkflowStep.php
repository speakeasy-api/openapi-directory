<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * WorkflowStep - The basic building block of a workflow.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class WorkflowStep
{
	#[\JMS\Serializer\Annotation\SerializedName('CopyStepDetails')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CopyStepDetails')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CopyStepDetails $copyStepDetails = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CustomStepDetails')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CustomStepDetails')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CustomStepDetails $customStepDetails = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DecryptStepDetails')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DecryptStepDetails')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DecryptStepDetails $decryptStepDetails = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DeleteStepDetails')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DeleteStepDetails')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DeleteStepDetails $deleteStepDetails = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TagStepDetails')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TagStepDetails')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TagStepDetails $tagStepDetails = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\WorkflowStepTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?WorkflowStepTypeEnum $type = null;
    
	public function __construct()
	{
		$this->copyStepDetails = null;
		$this->customStepDetails = null;
		$this->decryptStepDetails = null;
		$this->deleteStepDetails = null;
		$this->tagStepDetails = null;
		$this->type = null;
	}
}
