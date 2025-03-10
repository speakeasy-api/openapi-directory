<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DestinyDefinitionsDestinyItemSocketEntryDefinition - The definition information for a specific socket on an item. This will determine how the socket behaves in-game.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DestinyDefinitionsDestinyItemSocketEntryDefinition
{
    /**
     * If true, then this socket is visible in the item's "default" state. If you have an instance, you should always check the runtime state, as that can override this visibility setting: but if you're looking at the item on a conceptual level, this property can be useful for hiding data such as legacy sockets - which remain defined on items for infrastructure purposes, but can be confusing for users to see.
     * 
     * @var ?bool $defaultVisible
     */
	
    public ?bool $defaultVisible = null;
    
    /**
     * If this is true, the perks provided by this socket shouldn't be shown in the item's tooltip. This might be useful if it's providing a hidden bonus, or if the bonus is less important than other benefits on the item.
     * 
     * @var ?bool $hidePerksInItemTooltip
     */
	
    public ?bool $hidePerksInItemTooltip = null;
    
    /**
     * Indicates where you should go to get plugs for this socket. This will affect how you populate your UI, as well as what plugs are valid for this socket. It's an alternative to having to check for the existence of certain properties (reusablePlugItems for example) to infer where plugs should come from.
     * 
     * @var ?int $plugSources
     */
	
    public ?int $plugSources = null;
    
    /**
     * If this is true, then the socket will not be initialized with a plug if the item is purchased from a Vendor.
     * 
     * Remember that Vendors are much more than conceptual vendors: they include "Collection Kiosks" and other entities. See DestinyVendorDefinition for more information.
     * 
     * @var ?bool $preventInitializationOnVendorPurchase
     */
	
    public ?bool $preventInitializationOnVendorPurchase = null;
    
    /**
     * This field replaces "randomizedPlugItems" as of Shadowkeep launch. If a socket has randomized plugs, this is a pointer to the set of plugs that could be used, as defined in DestinyPlugSetDefinition.
     * 
     *  If null, the item has no randomized plugs.
     * 
     * @var ?int $randomizedPlugSetHash
     */
	
    public ?int $randomizedPlugSetHash = null;
    
    /**
     * This is a list of pre-determined plugs that can *always* be plugged into this socket, without the character having the plug in their inventory.
     * 
     * If this list is populated, you will not be allowed to plug an arbitrary item in the socket: you will only be able to choose from one of these reusable plugs.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\DestinyDefinitionsDestinyItemSocketEntryPlugItemDefinition> $reusablePlugItems
     */
	
    public ?array $reusablePlugItems = null;
    
    /**
     * If this socket's plugs come from a reusable DestinyPlugSetDefinition, this is the identifier for that set. We added this concept to reduce some major duplication that's going to come from sockets as replacements for what was once implemented as large sets of items and kiosks (like Emotes).
     * 
     *  As of Shadowkeep, these will come up much more frequently and be driven by game content rather than custom curation.
     * 
     * @var ?int $reusablePlugSetHash
     */
	
    public ?int $reusablePlugSetHash = null;
    
    /**
     * If a valid hash, this is the hash identifier for the DestinyInventoryItemDefinition representing the Plug that will be initially inserted into the item on item creation. Otherwise, this Socket will either start without a plug inserted, or will have one randomly inserted.
     * 
     * @var ?int $singleInitialItemHash
     */
	
    public ?int $singleInitialItemHash = null;
    
    /**
     * All sockets have a type, and this is the hash identifier for this particular type. Use it to look up the DestinySocketTypeDefinition: read there for more information on how socket types affect the behavior of the socket.
     * 
     * @var ?int $socketTypeHash
     */
	
    public ?int $socketTypeHash = null;
    
	public function __construct()
	{
		$this->defaultVisible = null;
		$this->hidePerksInItemTooltip = null;
		$this->plugSources = null;
		$this->preventInitializationOnVendorPurchase = null;
		$this->randomizedPlugSetHash = null;
		$this->reusablePlugItems = null;
		$this->reusablePlugSetHash = null;
		$this->singleInitialItemHash = null;
		$this->socketTypeHash = null;
	}
}
