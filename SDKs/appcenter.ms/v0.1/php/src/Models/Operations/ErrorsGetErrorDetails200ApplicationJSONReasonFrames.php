<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ErrorsGetErrorDetails200ApplicationJSONReasonFrames
{
    /**
     * this line isn't from any framework
     * 
     * @var ?bool $appCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('appCode')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $appCode = null;
    
    /**
     * is a class method
     * 
     * @var ?bool $classMethod
     */
	#[\JMS\Serializer\Annotation\SerializedName('classMethod')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $classMethod = null;
    
    /**
     * name of the class
     * 
     * @var ?string $className
     */
	#[\JMS\Serializer\Annotation\SerializedName('className')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $className = null;
    
    /**
     * Formatted frame string
     * 
     * @var ?string $codeFormatted
     */
	#[\JMS\Serializer\Annotation\SerializedName('codeFormatted')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $codeFormatted = null;
    
    /**
     * Unformatted Frame string
     * 
     * @var ?string $codeRaw
     */
	#[\JMS\Serializer\Annotation\SerializedName('codeRaw')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $codeRaw = null;
    
    /**
     * Exception type.
     * 
     * @var ?string $exceptionType
     */
	#[\JMS\Serializer\Annotation\SerializedName('exceptionType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $exceptionType = null;
    
    /**
     * name of the file
     * 
     * @var ?string $file
     */
	#[\JMS\Serializer\Annotation\SerializedName('file')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $file = null;
    
    /**
     * Name of the framework
     * 
     * @var ?string $frameworkName
     */
	#[\JMS\Serializer\Annotation\SerializedName('frameworkName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $frameworkName = null;
    
    /**
     * programming language of the frame
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ErrorsGetErrorDetails200ApplicationJSONReasonFramesLanguageEnum $language
     */
	#[\JMS\Serializer\Annotation\SerializedName('language')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\ErrorsGetErrorDetails200ApplicationJSONReasonFramesLanguageEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ErrorsGetErrorDetails200ApplicationJSONReasonFramesLanguageEnum $language = null;
    
    /**
     * line number
     * 
     * @var ?int $line
     */
	#[\JMS\Serializer\Annotation\SerializedName('line')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $line = null;
    
    /**
     * name of the method
     * 
     * @var ?string $method
     */
	#[\JMS\Serializer\Annotation\SerializedName('method')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $method = null;
    
    /**
     * parameters of the frames method
     * 
     * @var ?string $methodParams
     */
	#[\JMS\Serializer\Annotation\SerializedName('methodParams')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $methodParams = null;
    
    /**
     * OS exception type. (aka. SIGNAL)
     * 
     * @var ?string $osExceptionType
     */
	#[\JMS\Serializer\Annotation\SerializedName('osExceptionType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $osExceptionType = null;
    
	public function __construct()
	{
		$this->appCode = null;
		$this->classMethod = null;
		$this->className = null;
		$this->codeFormatted = null;
		$this->codeRaw = null;
		$this->exceptionType = null;
		$this->file = null;
		$this->frameworkName = null;
		$this->language = null;
		$this->line = null;
		$this->method = null;
		$this->methodParams = null;
		$this->osExceptionType = null;
	}
}
