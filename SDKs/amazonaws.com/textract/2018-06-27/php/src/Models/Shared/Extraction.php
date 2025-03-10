<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Extraction - Contains information extracted by an analysis operation after using StartLendingAnalysis.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Extraction
{
    /**
     * The structure holding all the information returned by AnalyzeExpense
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ExpenseDocument $expenseDocument
     */
	#[\JMS\Serializer\Annotation\SerializedName('ExpenseDocument')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ExpenseDocument')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ExpenseDocument $expenseDocument = null;
    
    /**
     * The structure that lists each document processed in an AnalyzeID operation.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\IdentityDocument $identityDocument
     */
	#[\JMS\Serializer\Annotation\SerializedName('IdentityDocument')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\IdentityDocument')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?IdentityDocument $identityDocument = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LendingDocument')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LendingDocument')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LendingDocument $lendingDocument = null;
    
	public function __construct()
	{
		$this->expenseDocument = null;
		$this->identityDocument = null;
		$this->lendingDocument = null;
	}
}
