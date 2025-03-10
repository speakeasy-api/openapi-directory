<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BrandedFoodObjectItemsNutrients - An object containing information for a specific nutrient found in this food item
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BrandedFoodObjectItemsNutrients
{
    /**
     * Number of observations on which the value is based
     * 
     * @var ?int $dataPoints
     */
	#[\JMS\Serializer\Annotation\SerializedName('data_points')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $dataPoints = null;
    
    /**
     * Description of the nutrient source
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * The unit used for the measure of this nutrient
     * 
     * @var ?string $measurementUnit
     */
	#[\JMS\Serializer\Annotation\SerializedName('measurement_unit')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $measurementUnit = null;
    
    /**
     * Nutrient name
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Amount of the nutrient per 100g of food
     * 
     * @var ?float $per100g
     */
	#[\JMS\Serializer\Annotation\SerializedName('per_100g')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $per100g = null;
    
    /**
     * Nutrient rank
     * 
     * @var ?int $rank
     */
	#[\JMS\Serializer\Annotation\SerializedName('rank')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $rank = null;
    
	public function __construct()
	{
		$this->dataPoints = null;
		$this->description = null;
		$this->measurementUnit = null;
		$this->name = null;
		$this->per100g = null;
		$this->rank = null;
	}
}
