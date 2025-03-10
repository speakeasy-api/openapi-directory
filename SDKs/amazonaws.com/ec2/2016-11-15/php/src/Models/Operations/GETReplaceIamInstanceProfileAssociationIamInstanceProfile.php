<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
/**
 * GETReplaceIamInstanceProfileAssociationIamInstanceProfile - Describes an IAM instance profile.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GETReplaceIamInstanceProfileAssociationIamInstanceProfile
{
	#[SpeakeasyMetadata('queryParam:name=Arn')]
    public ?string $arn = null;
    
	#[SpeakeasyMetadata('queryParam:name=Name')]
    public ?string $name = null;
    
	public function __construct()
	{
		$this->arn = null;
		$this->name = null;
	}
}
