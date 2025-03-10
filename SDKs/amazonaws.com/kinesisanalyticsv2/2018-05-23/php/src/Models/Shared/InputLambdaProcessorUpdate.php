<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * InputLambdaProcessorUpdate - For a SQL-based Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class InputLambdaProcessorUpdate
{
	#[\JMS\Serializer\Annotation\SerializedName('ResourceARNUpdate')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $resourceARNUpdate;
    
	public function __construct()
	{
		$this->resourceARNUpdate = "";
	}
}
