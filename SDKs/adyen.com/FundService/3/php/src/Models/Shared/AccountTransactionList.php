<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class AccountTransactionList
{
    /**
     * The code of the account.
     * 
     * @var ?string $accountCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('accountCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountCode = null;
    
    /**
     * Indicates whether there is a next page of transactions available.
     * 
     * @var ?bool $hasNextPage
     */
	#[\JMS\Serializer\Annotation\SerializedName('hasNextPage')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $hasNextPage = null;
    
    /**
     * The list of transactions.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\TransactionWrapper> $transactions
     */
	#[\JMS\Serializer\Annotation\SerializedName('transactions')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\TransactionWrapper>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $transactions = null;
    
	public function __construct()
	{
		$this->accountCode = null;
		$this->hasNextPage = null;
		$this->transactions = null;
	}
}
