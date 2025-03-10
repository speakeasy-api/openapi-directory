<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DestinyResponsesDestinyCollectibleNodeDetailResponse - Returns the detailed information about a Collectible Presentation Node and any Collectibles that are direct descendants.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DestinyResponsesDestinyCollectibleNodeDetailResponse
{
    /**
     * Item components, keyed by the item hash of the items pointed at collectibles found under the requested Presentation Node.
     * 
     * NOTE: I had a lot of hemming and hawing about whether these should be keyed by collectible hash or item hash... but ultimately having it be keyed by item hash meant that UI that already uses DestinyItemComponentSet data wouldn't have to have a special override to do the collectible -> item lookup once you delve into an item's details, and it also meant that you didn't have to remember that the Hash being used as the key for plugSets was different from the Hash being used for the other Dictionaries. As a result, using the Item Hash felt like the least crappy solution.
     * We may all come to regret this decision. We will see.
     * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents $collectibleItemComponents
     */
	
    public ?DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents $collectibleItemComponents = null;
    
    /**
     * COMPONENT TYPE: Collectibles
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles $collectibles
     */
	
    public ?DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles $collectibles = null;
    
	public function __construct()
	{
		$this->collectibleItemComponents = null;
		$this->collectibles = null;
	}
}
