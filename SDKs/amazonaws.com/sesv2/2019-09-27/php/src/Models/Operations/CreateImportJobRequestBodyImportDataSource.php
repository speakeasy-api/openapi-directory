<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * CreateImportJobRequestBodyImportDataSource - An object that contains details about the data source of the import job.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class CreateImportJobRequestBodyImportDataSource
{
	#[\JMS\Serializer\Annotation\SerializedName('DataFormat')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DataFormatEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\DataFormatEnum $dataFormat = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('S3Url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $s3Url = null;
    
	public function __construct()
	{
		$this->dataFormat = null;
		$this->s3Url = null;
	}
}
