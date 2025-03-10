<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** The type of the direct debit. */
enum GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum: string
{
    case FIRST_COLLECTION = 'FIRST_COLLECTION';
    case ONGOING_COLLECTION = 'ONGOING_COLLECTION';
    case REPRESENTED_COLLECTION = 'REPRESENTED_COLLECTION';
    case FINAL_COLLECTION = 'FINAL_COLLECTION';
}
