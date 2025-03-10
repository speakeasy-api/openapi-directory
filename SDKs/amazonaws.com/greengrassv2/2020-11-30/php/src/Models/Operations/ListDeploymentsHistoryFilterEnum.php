<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** <p>The filter for the list of deployments. Choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all deployments.</p> </li> <li> <p> <code>LATEST_ONLY</code> – The list includes only the latest revision of each deployment.</p> </li> </ul> <p>Default: <code>LATEST_ONLY</code> </p> */
enum ListDeploymentsHistoryFilterEnum: string
{
    case ALL = 'ALL';
    case LATEST_ONLY = 'LATEST_ONLY';
}
