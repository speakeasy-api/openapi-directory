<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PublishAppVersionRequestBody
{
    /**
     * The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     * 
     * @var string $appArn
     */
	#[\JMS\Serializer\Annotation\SerializedName('appArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $appArn;
    
	public function __construct()
	{
		$this->appArn = "";
	}
}
