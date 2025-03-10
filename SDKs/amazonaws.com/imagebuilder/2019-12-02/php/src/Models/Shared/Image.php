<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Image - An Image Builder image. You must specify exactly one recipe for the image – either a container recipe (<code>containerRecipe</code>), which creates a container image, or an image recipe (<code>imageRecipe</code>), which creates an AMI.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Image
{
	#[\JMS\Serializer\Annotation\SerializedName('arn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $arn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('buildType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\BuildTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?BuildTypeEnum $buildType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('containerRecipe')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ContainerRecipe')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ContainerRecipe $containerRecipe = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('dateCreated')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $dateCreated = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('distributionConfiguration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DistributionConfiguration')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DistributionConfiguration $distributionConfiguration = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('enhancedImageMetadataEnabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $enhancedImageMetadataEnabled = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('imageRecipe')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ImageRecipe')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ImageRecipe $imageRecipe = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('imageScanningConfiguration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ImageScanningConfiguration')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ImageScanningConfiguration $imageScanningConfiguration = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('imageSource')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ImageSourceEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ImageSourceEnum $imageSource = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('imageTestsConfiguration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ImageTestsConfiguration')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ImageTestsConfiguration $imageTestsConfiguration = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('infrastructureConfiguration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\InfrastructureConfiguration')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?InfrastructureConfiguration $infrastructureConfiguration = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('osVersion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $osVersion = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('outputResources')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\OutputResources')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?OutputResources $outputResources = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('platform')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\PlatformEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PlatformEnum $platform = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('scanState')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ImageScanState')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ImageScanState $scanState = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('sourcePipelineArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sourcePipelineArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('sourcePipelineName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sourcePipelineName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ImageState')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ImageState $state = null;
    
    /**
     * $tags
     * 
     * @var ?array<string, string> $tags
     */
	#[\JMS\Serializer\Annotation\SerializedName('tags')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tags = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ImageTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ImageTypeEnum $type = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('version')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $version = null;
    
	public function __construct()
	{
		$this->arn = null;
		$this->buildType = null;
		$this->containerRecipe = null;
		$this->dateCreated = null;
		$this->distributionConfiguration = null;
		$this->enhancedImageMetadataEnabled = null;
		$this->imageRecipe = null;
		$this->imageScanningConfiguration = null;
		$this->imageSource = null;
		$this->imageTestsConfiguration = null;
		$this->infrastructureConfiguration = null;
		$this->name = null;
		$this->osVersion = null;
		$this->outputResources = null;
		$this->platform = null;
		$this->scanState = null;
		$this->sourcePipelineArn = null;
		$this->sourcePipelineName = null;
		$this->state = null;
		$this->tags = null;
		$this->type = null;
		$this->version = null;
	}
}
