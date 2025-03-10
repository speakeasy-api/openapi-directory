<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PullRequestReview - Pull Request Reviews are reviews on pull requests.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PullRequestReview
{
	#[\JMS\Serializer\Annotation\SerializedName('_links')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PullRequestReviewLinks')]
    public PullRequestReviewLinks $links;
    
    /**
     * How the author is associated with the repository.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\AuthorAssociationEnum $authorAssociation
     */
	#[\JMS\Serializer\Annotation\SerializedName('author_association')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\AuthorAssociationEnum>')]
    public AuthorAssociationEnum $authorAssociation;
    
    /**
     * The text of the review.
     * 
     * @var string $body
     */
	#[\JMS\Serializer\Annotation\SerializedName('body')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $body;
    
	#[\JMS\Serializer\Annotation\SerializedName('body_html')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bodyHtml = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('body_text')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bodyText = null;
    
    /**
     * A commit SHA for the review.
     * 
     * @var string $commitId
     */
	#[\JMS\Serializer\Annotation\SerializedName('commit_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $commitId;
    
	#[\JMS\Serializer\Annotation\SerializedName('html_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $htmlUrl;
    
    /**
     * Unique identifier of the review
     * 
     * @var int $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $id;
    
	#[\JMS\Serializer\Annotation\SerializedName('node_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $nodeId;
    
	#[\JMS\Serializer\Annotation\SerializedName('pull_request_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $pullRequestUrl;
    
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $state;
    
	#[\JMS\Serializer\Annotation\SerializedName('submitted_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $submittedAt = null;
    
    /**
     * Simple User
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser $user
     */
	#[\JMS\Serializer\Annotation\SerializedName('user')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser')]
    public NullableSimpleUser $user;
    
	public function __construct()
	{
		$this->links = new \OpenAPI\OpenAPI\Models\Shared\PullRequestReviewLinks();
		$this->authorAssociation = \OpenAPI\OpenAPI\Models\Shared\AuthorAssociationEnum::COLLABORATOR;
		$this->body = "";
		$this->bodyHtml = null;
		$this->bodyText = null;
		$this->commitId = "";
		$this->htmlUrl = "";
		$this->id = 0;
		$this->nodeId = "";
		$this->pullRequestUrl = "";
		$this->state = "";
		$this->submittedAt = null;
		$this->user = new \OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser();
	}
}
