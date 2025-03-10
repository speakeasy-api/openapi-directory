<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateDeliverabilityTestReportResponse
{
    /**
     * AccountSuspendedException
     * 
     * @var mixed $accountSuspendedException
     */
	
    public mixed $accountSuspendedException = null;
    
    /**
     * BadRequestException
     * 
     * @var mixed $badRequestException
     */
	
    public mixed $badRequestException = null;
    
    /**
     * ConcurrentModificationException
     * 
     * @var mixed $concurrentModificationException
     */
	
    public mixed $concurrentModificationException = null;
    
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CreateDeliverabilityTestReportResponse $createDeliverabilityTestReportResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\CreateDeliverabilityTestReportResponse $createDeliverabilityTestReportResponse = null;
    
    /**
     * LimitExceededException
     * 
     * @var mixed $limitExceededException
     */
	
    public mixed $limitExceededException = null;
    
    /**
     * MailFromDomainNotVerifiedException
     * 
     * @var mixed $mailFromDomainNotVerifiedException
     */
	
    public mixed $mailFromDomainNotVerifiedException = null;
    
    /**
     * MessageRejected
     * 
     * @var mixed $messageRejected
     */
	
    public mixed $messageRejected = null;
    
    /**
     * NotFoundException
     * 
     * @var mixed $notFoundException
     */
	
    public mixed $notFoundException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * SendingPausedException
     * 
     * @var mixed $sendingPausedException
     */
	
    public mixed $sendingPausedException = null;
    
    /**
     * TooManyRequestsException
     * 
     * @var mixed $tooManyRequestsException
     */
	
    public mixed $tooManyRequestsException = null;
    
	public function __construct()
	{
		$this->accountSuspendedException = null;
		$this->badRequestException = null;
		$this->concurrentModificationException = null;
		$this->contentType = "";
		$this->createDeliverabilityTestReportResponse = null;
		$this->limitExceededException = null;
		$this->mailFromDomainNotVerifiedException = null;
		$this->messageRejected = null;
		$this->notFoundException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->sendingPausedException = null;
		$this->tooManyRequestsException = null;
	}
}
