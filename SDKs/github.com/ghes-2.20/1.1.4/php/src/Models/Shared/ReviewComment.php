<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ReviewComment - Legacy Review Comment
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ReviewComment
{
	#[\JMS\Serializer\Annotation\SerializedName('_links')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ReviewCommentLinks')]
    public ReviewCommentLinks $links;
    
    /**
     * How the author is associated with the repository.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\AuthorAssociationEnum $authorAssociation
     */
	#[\JMS\Serializer\Annotation\SerializedName('author_association')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\AuthorAssociationEnum>')]
    public AuthorAssociationEnum $authorAssociation;
    
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
    
	#[\JMS\Serializer\Annotation\SerializedName('commit_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $commitId;
    
	#[\JMS\Serializer\Annotation\SerializedName('created_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $createdAt;
    
	#[\JMS\Serializer\Annotation\SerializedName('diff_hunk')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $diffHunk;
    
	#[\JMS\Serializer\Annotation\SerializedName('html_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $htmlUrl;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $id;
    
	#[\JMS\Serializer\Annotation\SerializedName('in_reply_to_id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $inReplyToId = null;
    
    /**
     * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
     * 
     * @var ?int $line
     */
	#[\JMS\Serializer\Annotation\SerializedName('line')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $line = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('node_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $nodeId;
    
	#[\JMS\Serializer\Annotation\SerializedName('original_commit_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $originalCommitId;
    
    /**
     * The original line of the blob to which the comment applies. The last line of the range for a multi-line comment
     * 
     * @var ?int $originalLine
     */
	#[\JMS\Serializer\Annotation\SerializedName('original_line')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $originalLine = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('original_position')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $originalPosition;
    
    /**
     * The original first line of the range for a multi-line comment.
     * 
     * @var ?int $originalStartLine
     */
	#[\JMS\Serializer\Annotation\SerializedName('original_start_line')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $originalStartLine = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('path')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $path;
    
	#[\JMS\Serializer\Annotation\SerializedName('position')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $position;
    
	#[\JMS\Serializer\Annotation\SerializedName('pull_request_review_id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $pullRequestReviewId;
    
	#[\JMS\Serializer\Annotation\SerializedName('pull_request_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $pullRequestUrl;
    
	#[\JMS\Serializer\Annotation\SerializedName('reactions')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ReactionRollup')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ReactionRollup $reactions = null;
    
    /**
     * The side of the first line of the range for a multi-line comment.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ReviewCommentSideEnum $side
     */
	#[\JMS\Serializer\Annotation\SerializedName('side')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ReviewCommentSideEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ReviewCommentSideEnum $side = null;
    
    /**
     * The first line of the range for a multi-line comment.
     * 
     * @var ?int $startLine
     */
	#[\JMS\Serializer\Annotation\SerializedName('start_line')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $startLine = null;
    
    /**
     * The side of the first line of the range for a multi-line comment.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ReviewCommentStartSideEnum $startSide
     */
	#[\JMS\Serializer\Annotation\SerializedName('start_side')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ReviewCommentStartSideEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ReviewCommentStartSideEnum $startSide = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('updated_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $updatedAt;
    
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $url;
    
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
		$this->links = new \OpenAPI\OpenAPI\Models\Shared\ReviewCommentLinks();
		$this->authorAssociation = \OpenAPI\OpenAPI\Models\Shared\AuthorAssociationEnum::COLLABORATOR;
		$this->body = "";
		$this->bodyHtml = null;
		$this->bodyText = null;
		$this->commitId = "";
		$this->createdAt = new \DateTime();
		$this->diffHunk = "";
		$this->htmlUrl = "";
		$this->id = 0;
		$this->inReplyToId = null;
		$this->line = null;
		$this->nodeId = "";
		$this->originalCommitId = "";
		$this->originalLine = null;
		$this->originalPosition = 0;
		$this->originalStartLine = null;
		$this->path = "";
		$this->position = 0;
		$this->pullRequestReviewId = 0;
		$this->pullRequestUrl = "";
		$this->reactions = null;
		$this->side = null;
		$this->startLine = null;
		$this->startSide = null;
		$this->updatedAt = new \DateTime();
		$this->url = "";
		$this->user = new \OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser();
	}
}
