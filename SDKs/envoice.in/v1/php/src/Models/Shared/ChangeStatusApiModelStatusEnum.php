<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** New status of the invoice */
enum ChangeStatusApiModelStatusEnum: string
{
    case DRAFT = 'Draft';
    case PAID = 'Paid';
    case UNPAID = 'Unpaid';
    case OVERDUE = 'Overdue';
    case VOID = 'Void';
}
