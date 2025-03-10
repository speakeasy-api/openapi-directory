<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BoxConfiguration - Provides the configuration information to connect to Box as your data source.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BoxConfiguration
{
    /**
     * $commentFieldMappings
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\DataSourceToIndexFieldMapping> $commentFieldMappings
     */
	#[\JMS\Serializer\Annotation\SerializedName('CommentFieldMappings')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\DataSourceToIndexFieldMapping>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $commentFieldMappings = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CrawlComments')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $crawlComments = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CrawlTasks')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $crawlTasks = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CrawlWebLinks')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $crawlWebLinks = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EnterpriseId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $enterpriseId;
    
    /**
     * $exclusionPatterns
     * 
     * @var ?array<string> $exclusionPatterns
     */
	#[\JMS\Serializer\Annotation\SerializedName('ExclusionPatterns')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $exclusionPatterns = null;
    
    /**
     * $fileFieldMappings
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\DataSourceToIndexFieldMapping> $fileFieldMappings
     */
	#[\JMS\Serializer\Annotation\SerializedName('FileFieldMappings')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\DataSourceToIndexFieldMapping>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $fileFieldMappings = null;
    
    /**
     * $inclusionPatterns
     * 
     * @var ?array<string> $inclusionPatterns
     */
	#[\JMS\Serializer\Annotation\SerializedName('InclusionPatterns')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $inclusionPatterns = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SecretArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $secretArn;
    
    /**
     * $taskFieldMappings
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\DataSourceToIndexFieldMapping> $taskFieldMappings
     */
	#[\JMS\Serializer\Annotation\SerializedName('TaskFieldMappings')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\DataSourceToIndexFieldMapping>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $taskFieldMappings = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('UseChangeLog')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $useChangeLog = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('VpcConfiguration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DataSourceVpcConfiguration')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DataSourceVpcConfiguration $vpcConfiguration = null;
    
    /**
     * $webLinkFieldMappings
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\DataSourceToIndexFieldMapping> $webLinkFieldMappings
     */
	#[\JMS\Serializer\Annotation\SerializedName('WebLinkFieldMappings')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\DataSourceToIndexFieldMapping>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $webLinkFieldMappings = null;
    
	public function __construct()
	{
		$this->commentFieldMappings = null;
		$this->crawlComments = null;
		$this->crawlTasks = null;
		$this->crawlWebLinks = null;
		$this->enterpriseId = "";
		$this->exclusionPatterns = null;
		$this->fileFieldMappings = null;
		$this->inclusionPatterns = null;
		$this->secretArn = "";
		$this->taskFieldMappings = null;
		$this->useChangeLog = null;
		$this->vpcConfiguration = null;
		$this->webLinkFieldMappings = null;
	}
}
