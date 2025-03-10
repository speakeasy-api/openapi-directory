<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SoapNoteCustomReport - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SoapNoteCustomReport
{
    /**
     * Indicates that the doctor has soft-deleted this template, and will not use it for future appointments
     * 
     * @var ?bool $archived
     */
	#[\JMS\Serializer\Annotation\SerializedName('archived')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $archived = null;
    
    /**
     * clinical note fields
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\SoapNoteCustomReportClinicalNoteField> $clinicalNoteFields
     */
	#[\JMS\Serializer\Annotation\SerializedName('clinical_note_fields')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\SoapNoteCustomReportClinicalNoteField>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $clinicalNoteFields = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('doctor')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $doctor = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('is_onpatient')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isOnpatient = null;
    
    /**
     * If this is true, this report will be the same across all notes
     * 
     * @var ?bool $isPersistent
     */
	#[\JMS\Serializer\Annotation\SerializedName('is_persistent')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isPersistent = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Order of templates
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\SoapNoteCustomReportSoapNoteCustomReport $order
     */
	#[\JMS\Serializer\Annotation\SerializedName('order')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\SoapNoteCustomReportSoapNoteCustomReport')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SoapNoteCustomReportSoapNoteCustomReport $order = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('updated_at')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $updatedAt = null;
    
	public function __construct()
	{
		$this->archived = null;
		$this->clinicalNoteFields = null;
		$this->doctor = null;
		$this->id = null;
		$this->isOnpatient = null;
		$this->isPersistent = null;
		$this->name = null;
		$this->order = null;
		$this->updatedAt = null;
	}
}
