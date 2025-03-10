<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * The category of the transaction indicating the type of activity.
 * 
 * 
 *  Possible values:
 * 
 * * **platformPayment**: The transaction is a payment or payment modification made with an Adyen merchant account.
 * 
 * * **internal**: The transaction resulted from an internal adjustment such as a deposit correction or invoice deduction.
 * 
 * * **bank**: The transaction is a bank-related activity, such as sending a payout or receiving funds.
 * 
 * * **issuedCard**: The transaction is a card-related activity, such as using an Adyen-issued card to pay online.
 * 
 * 
 */
enum TransactionCategoryEnum: string
{
    case BANK = 'bank';
    case GRANTS = 'grants';
    case INTERNAL = 'internal';
    case ISSUED_CARD = 'issuedCard';
    case PLATFORM_PAYMENT = 'platformPayment';
}
