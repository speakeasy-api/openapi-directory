<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Expiry month for the test card range.
 * 
 * 
 * Allowed values:
 * * JANUARY
 * * FEBRUARY
 * * MARCH
 * * APRIL
 * * MAY
 * * JUNE
 * * JULY
 * * AUGUST
 * * SEPTEMBER
 * * OCTOBER
 * * NOVEMBER
 * * DECEMBER
 */
enum TestCardRangeExpiryMonthEnum: string
{
    case APRIL = 'APRIL';
    case AUGUST = 'AUGUST';
    case DECEMBER = 'DECEMBER';
    case FEBRUARY = 'FEBRUARY';
    case JANUARY = 'JANUARY';
    case JULY = 'JULY';
    case JUNE = 'JUNE';
    case MARCH = 'MARCH';
    case MAY = 'MAY';
    case NOVEMBER = 'NOVEMBER';
    case OCTOBER = 'OCTOBER';
    case SEPTEMBER = 'SEPTEMBER';
}
