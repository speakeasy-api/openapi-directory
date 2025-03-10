<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Payment method */
enum PaymentMethodEnum: string
{
    case TRANSFER = 'Transfer';
    case DEBIT = 'Debit';
    case PAYPAL = 'Paypal';
    case CHECK = 'Check';
    case CREDIT_NOTE = 'CreditNote';
    case LOSS = 'Loss';
    case ONLINE_PAYMENT = 'OnlinePayment';
}
