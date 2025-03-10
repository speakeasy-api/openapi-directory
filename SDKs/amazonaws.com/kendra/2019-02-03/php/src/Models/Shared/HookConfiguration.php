<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * HookConfiguration - <p>Provides the configuration information for invoking a Lambda function in Lambda to alter document metadata and content when ingesting documents into Amazon Kendra. You can configure your Lambda function using <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html">PreExtractionHookConfiguration</a> if you want to apply advanced alterations on the original or raw documents. If you want to apply advanced alterations on the Amazon Kendra structured documents, you must configure your Lambda function using <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html">PostExtractionHookConfiguration</a>. You can only invoke one Lambda function. However, this function can invoke other functions it requires.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class HookConfiguration
{
	#[\JMS\Serializer\Annotation\SerializedName('InvocationCondition')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DocumentAttributeCondition')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DocumentAttributeCondition $invocationCondition = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LambdaArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $lambdaArn;
    
	#[\JMS\Serializer\Annotation\SerializedName('S3Bucket')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $s3Bucket;
    
	public function __construct()
	{
		$this->invocationCondition = null;
		$this->lambdaArn = "";
		$this->s3Bucket = "";
	}
}
