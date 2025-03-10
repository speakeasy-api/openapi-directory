<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class VerifyUserAttributeResponse
{
    /**
     * AliasExistsException
     * 
     * @var mixed $aliasExistsException
     */
	
    public mixed $aliasExistsException = null;
    
    /**
     * CodeMismatchException
     * 
     * @var mixed $codeMismatchException
     */
	
    public mixed $codeMismatchException = null;
    
	
    public string $contentType;
    
    /**
     * ExpiredCodeException
     * 
     * @var mixed $expiredCodeException
     */
	
    public mixed $expiredCodeException = null;
    
    /**
     * ForbiddenException
     * 
     * @var mixed $forbiddenException
     */
	
    public mixed $forbiddenException = null;
    
    /**
     * InternalErrorException
     * 
     * @var mixed $internalErrorException
     */
	
    public mixed $internalErrorException = null;
    
    /**
     * InvalidParameterException
     * 
     * @var mixed $invalidParameterException
     */
	
    public mixed $invalidParameterException = null;
    
    /**
     * LimitExceededException
     * 
     * @var mixed $limitExceededException
     */
	
    public mixed $limitExceededException = null;
    
    /**
     * NotAuthorizedException
     * 
     * @var mixed $notAuthorizedException
     */
	
    public mixed $notAuthorizedException = null;
    
    /**
     * PasswordResetRequiredException
     * 
     * @var mixed $passwordResetRequiredException
     */
	
    public mixed $passwordResetRequiredException = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * ResourceNotFoundException
     * 
     * @var mixed $resourceNotFoundException
     */
	
    public mixed $resourceNotFoundException = null;
    
    /**
     * TooManyRequestsException
     * 
     * @var mixed $tooManyRequestsException
     */
	
    public mixed $tooManyRequestsException = null;
    
    /**
     * UserNotConfirmedException
     * 
     * @var mixed $userNotConfirmedException
     */
	
    public mixed $userNotConfirmedException = null;
    
    /**
     * UserNotFoundException
     * 
     * @var mixed $userNotFoundException
     */
	
    public mixed $userNotFoundException = null;
    
    /**
     * Success
     * 
     * @var ?array<string, mixed> $verifyUserAttributeResponse
     */
	
    public ?array $verifyUserAttributeResponse = null;
    
	public function __construct()
	{
		$this->aliasExistsException = null;
		$this->codeMismatchException = null;
		$this->contentType = "";
		$this->expiredCodeException = null;
		$this->forbiddenException = null;
		$this->internalErrorException = null;
		$this->invalidParameterException = null;
		$this->limitExceededException = null;
		$this->notAuthorizedException = null;
		$this->passwordResetRequiredException = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->resourceNotFoundException = null;
		$this->tooManyRequestsException = null;
		$this->userNotConfirmedException = null;
		$this->userNotFoundException = null;
		$this->verifyUserAttributeResponse = null;
	}
}
