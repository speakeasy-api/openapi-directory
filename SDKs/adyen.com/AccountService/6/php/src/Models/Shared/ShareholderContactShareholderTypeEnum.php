<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Specifies how the person is associated with the account holder. 
 * 
 * 
 * Possible values: 
 * 
 * * **Owner**: Individuals who directly or indirectly own 25% or more of a company.
 * 
 * * **Controller**: Individuals who are members of senior management staff responsible for managing a company or organization.
 */
enum ShareholderContactShareholderTypeEnum: string
{
    case CONTROLLER = 'Controller';
    case OWNER = 'Owner';
    case SIGNATORY = 'Signatory';
}
