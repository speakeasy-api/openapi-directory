<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetWebhookResult -  The result structure for the get webhook request. 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetWebhookResult
{
	#[\JMS\Serializer\Annotation\SerializedName('webhook')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Webhook')]
    public Webhook $webhook;
    
	public function __construct()
	{
		$this->webhook = new \OpenAPI\OpenAPI\Models\Shared\Webhook();
	}
}
