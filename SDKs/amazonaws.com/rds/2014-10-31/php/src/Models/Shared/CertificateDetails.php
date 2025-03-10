<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CertificateDetails - <p>Returns the details of the DB instance’s server certificate.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB instance</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html"> Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CertificateDetails
{
	
    public ?string $caIdentifier = null;
    
	
    public ?\DateTime $validTill = null;
    
	public function __construct()
	{
		$this->caIdentifier = null;
		$this->validTill = null;
	}
}
