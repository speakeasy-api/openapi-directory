<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Can be one of the following: `1`(Goal), `2`(Patient education), `3`(Patient decision aid), `4`(Patient clinical instruction), `5`(Referral to other doctor), `6`(Health concerns) */
enum CarePlanPlanTypeEnum: string
{
    case ONE = '1';
    case TWO = '2';
    case THREE = '3';
    case FOUR = '4';
    case FIVE = '5';
    case SIX = '6';
}
