package shared

type FeedTypeEnum string

const (
	FeedTypeEnumProducts      FeedTypeEnum = "Products"
	FeedTypeEnumInventory     FeedTypeEnum = "Inventory"
	FeedTypeEnumPricing       FeedTypeEnum = "Pricing"
	FeedTypeEnumImages        FeedTypeEnum = "Images"
	FeedTypeEnumRelationships FeedTypeEnum = "Relationships"
	FeedTypeEnumUnpublish     FeedTypeEnum = "Unpublish"
	FeedTypeEnumOffers        FeedTypeEnum = "Offers"
)
