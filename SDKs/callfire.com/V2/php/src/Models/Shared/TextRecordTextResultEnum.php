<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Result of a text (SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED). See [call states and results](https://developers.callfire.com/results-responses-errors.html) */
enum TextRecordTextResultEnum: string
{
    case SENT = 'SENT';
    case RECEIVED = 'RECEIVED';
    case DNT = 'DNT';
    case TOO_BIG = 'TOO_BIG';
    case INTERNAL_ERROR = 'INTERNAL_ERROR';
    case CARRIER_ERROR = 'CARRIER_ERROR';
    case CARRIER_TEMP_ERROR = 'CARRIER_TEMP_ERROR';
    case UNDIALED = 'UNDIALED';
    case INVALID_NUMBER = 'INVALID_NUMBER';
}
