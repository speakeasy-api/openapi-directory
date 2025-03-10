<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PutClassificationExportConfigurationRequestBody
{
    /**
     * Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 bucket.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\PutClassificationExportConfigurationRequestBodyConfiguration $configuration
     */
	#[\JMS\Serializer\Annotation\SerializedName('configuration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\PutClassificationExportConfigurationRequestBodyConfiguration')]
    public PutClassificationExportConfigurationRequestBodyConfiguration $configuration;
    
	public function __construct()
	{
		$this->configuration = new \OpenAPI\OpenAPI\Models\Operations\PutClassificationExportConfigurationRequestBodyConfiguration();
	}
}
