<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ItvBillingHistoryRecord
{
    /**
     * The card info.
     * 
     * @var array<string, mixed> $card
     */
	#[\JMS\Serializer\Annotation\SerializedName('card')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    public array $card;
    
    /**
     * The amount charged.
     * 
     * @var array<string, mixed> $charge
     */
	#[\JMS\Serializer\Annotation\SerializedName('charge')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    public array $charge;
    
    /**
     * The object with invoice details.
     * 
     * @var array<string, mixed> $invoice
     */
	#[\JMS\Serializer\Annotation\SerializedName('invoice')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    public array $invoice;
    
    /**
     * The object with subscription payment details.
     * 
     * @var array<string, mixed> $subscription
     */
	#[\JMS\Serializer\Annotation\SerializedName('subscription')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    public array $subscription;
    
	public function __construct()
	{
		$this->card = [];
		$this->charge = [];
		$this->invoice = [];
		$this->subscription = [];
	}
}
