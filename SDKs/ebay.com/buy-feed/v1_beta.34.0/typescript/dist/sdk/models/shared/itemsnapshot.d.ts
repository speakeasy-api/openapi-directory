import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type that defines the columns returned in the <b>Hourly Snapshot</b> feed file.  <p>  <b>Note: </b> When the value of the <b> availability</b> column is <code>UNAVAILABLE</code>, only the <b>itemId</b> and <b> availability</b> columns are populated.  </p>
 */
export declare class ItemSnapshot extends SpeakeasyBase {
    /**
     * This field is returned empty. For a list of payment methods available for a marketplace, see eBay help pages or the actual View Item page.
     */
    acceptedPaymentMethods?: string;
    /**
     * A pipe separated (<code>|</code>) list of URLs for the additional images of the item. These images are in addition to the primary image, which is returned in the <b>imageUrl</b> column. <b>Note: </b> This column can contain multiple values.
     */
    additionalImageUrls?: string;
    /**
     * Any per item additional shipping costs for a multi-item purchase. For example, let's say the shipping cost for a power cord is $3. But for an additional cord, the shipping cost is only $1. So if you bought 3 cords, the <b> shippingCost</b> would be $3 and this value would be $2 ($1 for each additional item).
     */
    additionalShippingCostPerUnit?: string;
    /**
     * The age group that the product is recommended for. <br><br><b>Valid values:</b> <code>newborn</code>, <code>infant</code>, <code>toddler</code>, <code>kids</code>, <code>adult</code>.
     */
    ageGroup?: string;
    /**
     * A pipe-separated list of alerts available for the item.<br><br>For example, if the <code>DELAYED_DELIVERY</code> alert was returned for an item, it would indicate a delay in shipping by the seller.
     */
    alerts?: string;
    /**
     * The currency used for the Authenticity Guarantee service fee.
     */
    authenticityGuaranteeFeeCurrency?: string;
    /**
     * The price of the Authenticity Guarantee service for the item.<br><br><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The price returned in this field indicates the service fee for a single item quantity.</span>
     */
    authenticityGuaranteeFeeValue?: string;
    /**
     * An indication of whether the Authenticity Guarantee service is optional or mandatory for the item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:OptionalityEnum'>eBay API documentation</a>
     */
    authenticityGuaranteeSelection?: string;
    /**
     * The unique identifier for the Authenticity Guarantee service associated with the item.
     */
    authenticityGuaranteeServiceId?: string;
    /**
     * An enumeration value representing the item's availability (possibility of being purchased). <br><br><b>Values: </b>    <ul>  <li>AVAILABLE</li>    <li>TEMPORARILY_UNAVAILABLE</li>     <li>UNAVAILABLE</li> </ul>  Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:AvailabilityEnum'>eBay API documentation</a>
     */
    availability?: string;
    /**
     * This column has a value only when the seller sets their '<a href="#display-item-quantity">display item quantity</a>' preference to <b> Display "More than 10 available" in your listing (if applicable)</b>. The value of this column will be "10", which is the threshold value. <br><br>Code so that your app gracefully handles any future changes to this value.
     */
    availabilityThreshold?: number;
    /**
     * <a name="display-item-quantity"></a> This column has a value only when the seller sets their <b>Display Item Quantity</b> preference to <b> Display "More than 10 available" in your listing (if applicable)</b>. The value of this column will be <code> MORE_THAN</code>. This indicates that the seller has more than the 'Display Item Quantity', which is 10, in stock for this item.    <br><br> The following are the <b>Display Item Quantity</b> preferences the seller can set. <br><ul><li> <b> Display "More than 10 available" in your listing (if applicable)</b> <br>If the seller enables this preference, this column will have a value as long as there are more than 10 of this item in inventory. If the quantity is equal to 10 or drops below 10, this column will be null and the estimated quantity of the item is returned in the <b> estimatedAvailableQuantity</b> column. </li> <li> <b> Display the exact quantity in your items</b> <br>If the seller enables this preference, the <b> availabilityThresholdType</b> and <b> availabilityThreshold</b> columns will be null  and the estimated quantity of the item is returned in the <b> estimatedAvailableQuantity</b> column.<br><br><b>Note: </b> Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. </li></ul>   <br>Code so that your app gracefully handles any future changes to these preferences. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:AvailabilityThresholdEnum'>eBay API documentation</a>
     */
    availabilityThresholdType?: string;
    /**
     * The name brand of the item, such as Nike, Apple, etc.
     */
    brand?: string;
    /**
     * A comma separated list of the purchase options available for the item. Currently the only supported option is <code>FIXED_PRICE</code>.
     */
    buyingOptions?: string;
    /**
     * The label of the category of the item. For example: <b> Toys & Hobbies|Action Figures|Comic Book Heroes </b>.
     */
    category?: string;
    /**
     * The ID of the category of the item. For example: The ID for Toys & Hobbies|Action Figures|Comic Book Heroes is <code>158671</code>.
     */
    categoryId?: string;
    /**
     * Status change indicator of the listing.<br><br><b>Values:</b> <ul><li><code>PRICE_CHANGE</code></li><li><code>QUANTITY_CHANGE</code></li><li><code>TITLE_CHANGE</code></li><li><code>DELETED</code></li><li><code>NEW</code></li><li><code>ENDED</code></li></ul>
     */
    changeMetadata?: string;
    /**
     * The color of the item.
     */
    color?: string;
    /**
     * The text describing the condition of the item, such as New or Used. For a list of condition names, see <a href="https://developer.ebay.com/devzone/finding/callref/enums/conditionIdList.html " target="_blank">Item Condition IDs and Names</a>.
     */
    condition?: string;
    /**
     * The identifier of the condition of the item. For example, 1000 is the identifier for NEW. For a list of condition names and IDs, see <a href="https://developer.ebay.com/devzone/finding/callref/enums/conditionIdList.html " target="_blank">Item Condition IDs and Names</a>.<br><br>Code so that your app gracefully handles any future changes to this list.
     */
    conditionId?: string;
    /**
     * The currency used to specify the coupon discount value.
     */
    couponDiscountCurrency?: string;
    /**
     * The type of discount that the coupon applies.<br><br><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> If all coupon fields return null values, it indicates that the item never had a coupon, or that the coupon has been removed. Please ensure that you update your inventory accordingly.</span>
     */
    couponDiscountType?: string;
    /**
     * The discount amount after the coupon is applied.
     */
    couponDiscountValue?: string;
    /**
     * The expiration date for the coupon. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code>
     */
    couponExpirationDate?: string;
    /**
     * A description of the coupon.
     */
    couponMessage?: string;
    /**
     * The redemption code for the coupon.
     */
    couponRedemptionCode?: string;
    /**
     * The URL to the coupon terms of use.
     */
    couponTermsWebUrl?: string;
    /**
     * URL to the gallery or default image of the item. The other images of the item are returned in the <b>additionalImageUrls</b> field.<br><br><b>For example</b><br><br><code>https://i.ebayimg.com/00/s/M********w/z/W********p/$_1.JPG?set_id=8********F</code>
     */
    defaultImageUrl?: string;
    /**
     * A comma-separated list of available delivery options. This column lets you filter out items than cannot be shipped to the buyer. <br><br><b>Valid Values</b>: SHIP_TO_HOME, SELLER_ARRANGED_LOCAL_PICKUP, IN_STORE_PICKUP, and PICKUP_DROP_OFF. <br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:DeliveryOptionsEnum'>eBay API documentation</a>
     */
    deliveryOptions?: string;
    /**
     * The seller created description of the item.<br><br><b>For example:</b><br><br><code>Brand-new, unused, and unworn. Not in original packaging.</code>
     */
    description?: string;
    /**
     * The calculated amount of the discount (<b>originalPriceValue</b> - <b>priceValue</b>). For example,  if <b>originalPriceValue</b> is 70 and <b>priceValue</b> is 56, this value would be 14. <br><br><b>Note:</b> The currency shown in <b>originalPriceCurrency</b> is used for both <b>discountAmount</b> and <b>originalPriceCurrency</b>.
     */
    discountAmount?: string;
    /**
     * The calculated discount percentage. For example, if <b> originalPriceValue</b> is 70 and <b> discountAmount</b> is 14, this value will be 20.
     */
    discountPercentage?: string;
    /**
     * The currency in which the Eco Participation Fee for the item is paid.
     */
    ecoParticipationFeeCurrency?: string;
    /**
     * The amount of the Eco Participation Fee, a fee paid toward the eventual disposal of the purchased item.
     */
    ecoParticipationFeeValue?: string;
    /**
     * Indicates the <a href="https://en.wikipedia.org/wiki/European_Union_energy_label">European energy efficiency</a> rating (EEK) of the item. This field is returned only if the seller specified the energy efficiency rating. <br><br>The rating is a set of energy efficiency classes from A to G, where 'A' is the most energy efficient and 'G' is the least efficient. This rating helps buyers choose between various models. <br><br>To retrieve the manufacturer's specifications for this item, when they are available, use the <a href="/api-docs/buy/browse/resources/item/methods/getItem">getItem</a> method in the Browse API. The information is returned in the <b> productFicheWebUrl</b> field.
     */
    energyEfficiencyClass?: string;
    /**
     * The eBay product identifier of a product from the eBay product catalog. You can use this value in the Browse API <a href="/api-docs/buy/browse/resources/item_summary/methods/search">search</a> method to retrieve items for this product and in the <a href="/api-docs/buy/marketing/resources/methods">Marketing API</a> methods to retrieve 'also viewed' and 'also bought' products to encourage up-selling and cross-selling.
     */
    epid?: string;
    /**
     * The estimated number of this item that are available for purchase. Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. So instead of returning quantity, the estimated availability of the item is returned.
     */
    estimatedAvailableQuantity?: number;
    /**
     * In cases where items could vary by gender, this specifies for which gender the product is intended. Possible values include male, female, and unisex.
     */
    gender?: string;
    /**
     * The unique Global Trade Item Number of the item as defined by <a href="https://www.gtin.info " target="_blank">https://www.gtin.info</a>. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value.
     */
    gtin?: string;
    /**
     * Base64 encoded additional information about the hazardous material.
     */
    hazmatAdditionalInformation?: string;
    /**
     * The base64 encoded descriptions of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>encoded(exploding bomb)|encoded(flame)</code>
     */
    hazmatPictogramDescriptions?: string;
    /**
     * The IDs of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>SGH01|SGH02</code>
     */
    hazmatPictogramIds?: string;
    /**
     * The image URLs of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>https:&#47;&#47;img1|https:&#47;&#47;img2</code>
     */
    hazmatPictogramImageUrls?: string;
    /**
     * The localized signal word for the hazardous material, such as 'Danger'.
     */
    hazmatSignalWord?: string;
    /**
     * The ID of the signal word for the hazardous material.
     */
    hazmatSignalWordId?: string;
    /**
     * The base64 encoded descriptions of hazardous material statements, separated by the pipe symbol. For example: <br /><br /><code>encoded(Unstable explosives)|encoded(Flammable gas)</code>
     */
    hazmatStatementDescriptions?: string;
    /**
     * The IDs of hazardous material statements, separated by the pipe symbol. For example: <br /><br /><code>H200|H221</code>
     */
    hazmatStatementIds?: string;
    /**
     * A boolean that indicates whether the images can be altered. If the value is <code>true</code>, you cannot modify the image. <p><span class="tablenote"><b>Note: </b> Due to image licensing agreements and other legal concerns, modification (including resizing) of some images is strictly prohibited. These images are for display as-is only. </span></p>
     */
    imageAlteringProhibited?: boolean;
    /**
     * The URL to the primary image of the item.  This is the URL of the largest image available based on what the seller submitted.
     */
    imageUrl?: string;
    /**
     * The ePID (eBay Product ID of a product in the eBay product catalog) for the item, which has been programmatically determined by eBay using the item's title, aspects, and other data. <br><br>If the seller actually provided an ePID at listing time for the item, the ePID value is returned in the <b>epid</b> column instead.
     */
    inferredEpid?: string;
    /**
     * The URL of the View Item page of the item, with the affiliate tracking ID appended to it.<br><br><b>For example</b><br><br><code>https://www.ebay.de/itm/2********0?mkevt=1&mkcid=1&mkrid=707-53477-19255-0&campid=CAMPAIGNID&toolid=2***6&customid=CUSTOMID</code>
     */
    itemAffiliateWebUrl?: string;
    /**
     * A timestamp indicating when the item was created. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code>
     */
    itemCreationDate?: string;
    /**
     * A timestamp indicating when the item's sale period will end based on its start date and duration. For Good 'Til Cancelled items, no value is returned in this column. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code>
     */
    itemEndDate?: string;
    /**
     * The unique identifier of an item in eBay RESTful format. An example would be <code>v1|1**********2|4**********2</code>.
     */
    itemId?: string;
    /**
     * The country where the item is physically located.
     */
    itemLocationCountry?: string;
    /**
     * This timestamp denotes the date and time the changes for that item were picked up and added to the snapshot feed file. <br><br>For example, let's say you have a snapshot feed file and also ran the <b> getItem</b> method. When you compare the same item information from the two sources, you see that the price in the <b> getItem</b> method response is different from the price in the snapshot feed file. By knowing the date and time you submitted the <b> getItem</b> method, you can use the <b> itemSnapshotDate</b> data to determine which price is the most current for this item. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code>
     */
    itemSnapshotDate?: string;
    /**
     * The URL of the View Item page of the item. <br/><br><b>For example:</b><br><br><b>Single SKU:</b><br><code>https://www.ebay.de/itm/2********0</code><br><br><b>MSKU:</b><br><code>https://www.ebay.com/itm/2********9?var=5********2</code>
     */
    itemWebUrl?: string;
    /**
     * The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page.
     */
    legacyItemId?: string;
    /**
     * A semicolon separated list of the name/value pairs for the aspects of the item, which are BASE64 encoded. The aspect label is separated by a pipe (|), the aspect name and value are separated by a colon (:) and the name/value pairs are separated by a semicolon (;). <p><b> Example without Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b> <br>&nbsp;&nbsp;&nbsp;<code><em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em></code> </p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):    <br>&nbsp;&nbsp;&nbsp;<code>U2l6ZQ==<b style="font-family: 'Arial Black';">:</b>WEw=<b style="font-family: 'Arial Black';">;</b>Q29sb3I=<b style="font-family: 'Arial Black';">:</b>UmVk<b style="font-family: 'Arial Black';">;</b>U2xlZXZlcw==<b style="font-family: 'Arial Black';">:</b>TG9uZw==</code> </p>    <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Size:XL;Color:Red;Sleeves:Long </p>        <p><br><b> Example with Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b>   <br>&nbsp;&nbsp;&nbsp;<code><em>encodedLabel</em>|<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedLabel</em>|</code></p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):  <br>&nbsp;&nbsp;&nbsp;<code>UHJvZHVjdCBJZGVudGlmaWVycw==<b style="font-family: 'Arial Black';">|</b>R1RJTg==<b style="font-family: 'Arial Black';">:</b>MDE5MDE5ODA2NjYzMw==<b style="font-family: 'Arial Black';">;</b>QlJBTkQ=<b style="font-family: 'Arial Black';">:</b>QXBwbGU=<b style="font-family: 'Arial Black';">;</b>UHJvZHVjdCBLZXkgRmVhdHVyZXM=<b style="font-family: 'Arial Black';">|</b>TW9kZWw=<b style="font-family: 'Arial Black';">:</b>aVBob25lIDc=</code> </p>        <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Product Identifiers|GTIN:0190198066633;BRAND:Apple;Product Key Features|Model:iPhone 7</p>        <p><span class="tablenote"><b>Note: </b> The separators (<code> |  :  ; </code>) are <i> not</i> encoded. You must decode each label, name, and value separately. You cannot decode the entire string.</b></p> <p>For more information, see <a href="/api-docs/buy/static/api-feed.html#encoded-aspects">Encoded Aspects</a> in the Buying Integration Guide.</p>
     */
    localizedAspects?: string;
    /**
     * The number of items in a lot. In other words, a lot size is the number of items that are being sold together.  <br><br>A lot is a set of two or more items included in a single listing that must be purchased together in a single order line item. All the items in the lot are the same but there can be multiple items in a single lot,  such as the package of batteries shown in the example below.   <br><br><table border="1"> <tr> <tr>  <th>Item</th>  <th>Lot Definition</th> <th>Lot Size</th></tr>  <tr>  <td>A package of 24 AA batteries</td>  <td>A box of 10 packages</td>  <td>10  </td> </tr>  <tr>  <td>A P235/75-15 Goodyear tire </td>  <td>4 tires  </td>  <td>4  </td> </tr> <tr> <td>Fashion Jewelry Rings  </td> <td>Package of 100 assorted rings  </td> <td>100 </td> </tr></table>  <br><br><span class="tablenote"><b>Note: </b>  Lots are not supported in all categories.  </span>
     */
    lotSize?: number;
    /**
     * The material that the item is made of.
     */
    material?: string;
    /**
     * The manufacturer part number, which is a number that is used in combination with <b> brand</b> to identify a product.
     */
    mpn?: string;
    /**
     * The currency of the <b> originalPriceValue</b> of the item and the <b> discountAmount</b>.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:CurrencyCodeEnum'>eBay API documentation</a>
     */
    originalPriceCurrency?: string;
    /**
     * The original selling price of the item. This lets you surface a strikethrough price for the item.
     */
    originalPriceValue?: string;
    /**
     * (Primary Item Aspect) Text describing the pattern used on the item. For example, paisley.<br><br><b>Note:</b> All the item aspects, including this aspect, are returned in the localizedAspects container.
     */
    pattern?: string;
    /**
     * The currency used for the price of the item. Generally, this is the currency used by the country of the eBay site offering the item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:CurrencyCodeEnum'>eBay API documentation</a>
     */
    priceCurrency?: string;
    /**
     * The price of the item, which can be a discounted price. <br><br><span class="tablenote"><b> Note: </b>The price includes the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the <a href="/api-docs/static/rest-request-components.html#HTTP"><code>X-EBAY-C-MARKETPLACE-ID</code></a> request header specifying the supported marketplace (such as <code>EBAY_GB</code>) to see the VAT-inclusive pricing. For more information on VAT, refer to <a href="https://www.ebay.co.uk/help/listings/default/vat-obligations-eu?id=4650&st=12&pos=1&query=Your%20VAT%20obligations%20in%20the%20EU&intent=VAT">VAT Obligations in the EU</a>.</span>
     */
    priceValue?: string;
    /**
     * The unique identifier for the item group that contains this item. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc.
     */
    primaryItemGroupId?: string;
    /**
     * The item group type. Supported value: <code>SELLER_DEFINED_VARIATIONS</code>, indicates that the item group was created by the seller. <br><br>Code so that your app gracefully handles any future changes to this list.
     */
    primaryItemGroupType?: string;
    /**
     * A pipe separated list of the qualified programs available for the item, such as EBAY_PLUS and AUTHENTICITY_GUARANTEE.  <br><br>eBay Plus is a premium account option for buyers, which provides benefits such as fast free domestic shipping and free returns on selected items. Top-Rated eBay sellers must opt in to eBay Plus to be able to offer the program on qualifying listings. Sellers must commit to next-day delivery of those items.  <span class="tablenote"><b>Note: </b> eBay Plus is available only to buyers in Germany, Austria, and Australia marketplaces. </span><br><br>The eBay Authenticity Guarantee program enables third-party authenticators to perform authentication verification inspections on items such as watches and sneakers.
     */
    qualifiedPrograms?: string;
    /**
     * The number of items used when calculating the shipping estimation information.
     */
    quantityUsedForEstimate?: number;
    /**
     * An enumeration value representing how a buyer is refunded when an item is returned. <br><br>Code so that your app gracefully handles any future changes to this list.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:RefundMethodEnum'>eBay API documentation</a>
     */
    refundMethod?: string;
    /**
     * A score that describes how easy it is to repair the product. Score values range from 0.1 (hardest to repair) to 10.0 (easiest), always including a single decimal place.<br><br><span class="tablenote"><b>Note:</b> Support for this field is currently limited to the France marketplace.</span>
     */
    repairScore?: string;
    /**
     * An enumeration value that indicates the alternative methods for a full refund when an item is returned. This column will have data if the seller offers the buyer an item replacement or exchange instead of a monetary refund. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:ReturnMethodEnum'>eBay API documentation</a>
     */
    returnMethod?: string;
    /**
     * An enumeration value that indicates the period of time being used to measure the duration, such as business days, months, or years. <br><br><b>TimeDurationUnitEnum</b> is a common type shared by multiple eBay APIs and fields to express the time unit, but for return period duration, this value will always be <code>DAY</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:TimeDurationUnitEnum'>eBay API documentation</a>
     */
    returnPeriodUnit?: string;
    /**
     * The amount of days that the buyer has to return the item after the purchase date. For example, if this value is <code>30</code>, the return period is 30 days.
     */
    returnPeriodValue?: number;
    /**
     * An enumeration value that indicates the party responsible for the return shipping costs when an item is returned. <br><br><b>Valid Values: </b> <code>BUYER</code> or <code>SELLER</code> <br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a>
     */
    returnShippingCostPayer?: string;
    /**
     * Indicates whether the seller accepts returns for the item.
     */
    returnsAccepted?: boolean;
    /**
     * A string value that specifies whether the seller is a business or an individual. This is determined when the seller registers with eBay. If the seller registers for a business account, the value returned in this field will be <code>BUSINESS</code>. If the seller registers for a private account, the value returned in this field will be <code>INDIVIDUAL</code>.<br><br><span class="tablenote"><b>Note:</b> This designation is required by the tax laws in some countries.</span><br><br>This field is returned only on the following sites: EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, and EBAY_PL.<br><br>Code so that your app gracefully handles any future changes to this list.<br><br><b>Valid Values:</b> <code>BUSINESS</code> or <code>INDIVIDUAL</code>
     */
    sellerAccountType?: string;
    /**
     * The percentage of the seller's total positive feedback.
     */
    sellerFeedbackPercentage?: string;
    /**
     * The feedback score of the seller. This value is based on the ratings from eBay members that bought items from this seller.
     */
    sellerFeedbackScore?: string;
    /**
     * An identifier generated/incremented when a seller revises the item. There are two types of item revisions: <ul><li>Seller changes, such as changing the title</li>  <li>eBay system changes, such as changing the quantity when an item is purchased</li></ul> This ID is changed <i> only</i> when the seller makes a change to the item.
     */
    sellerItemRevision?: string;
    /**
     * An enumeration value representing the eBay status of the seller. <br><br><b>Valid Values:</b> <code>TOP_RATED</code>, <code>ABOVE_STANDARD</code>, or an empty value. <br><br>An empty value indicates a return of anything other than <code>TOP_RATED</code> or <code>ABOVE_STANDARD</code>.<br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:SellerTrustLevelEnum'>eBay API documentation</a>
     */
    sellerTrustLevel?: string;
    /**
     * The seller's eBay user name.
     */
    sellerUsername?: string;
    /**
     * A pipe (<code>|</code>) separated alphabetical list of the geographic countries and regions where the item cannot be shipped. These countries and regions refine (restrict) the <b> shipToIncludedRegions</b> list.  <br><br>The COUNTRY: list is separated from the REGION: list with a semicolon (<code>;</code>).       <br><br><b> Format Example: </b> <br> <code>COUNTRY:US|BM|GL|MX|PM;REGION:AFRICA|ASIA|CENTRAL_AMERICA_AND_CARIBBEAN|EUROPE|MIDDLE_EAST|OCEANIA|SOUTH_AMERICA|SOUTHEAST_ASIA;</code>  <br><br><b> Country Values: </b> The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> standard code of the country.       <br><br><b> Region Values: </b> AFRICA, AMERICAS, ANTARCTIC, ARCTIC, ASIA, AUSTRALIA, CENTRAL_AMERICA_AND_CARIBBEAN, EUROPE, EURO_UNION, GREATER_CHINA, MIDDLE_EAST, NORTH_AMERICA, OCEANIA, REST_OF_ASIA, SOUTHEAST_ASIA, SOUTH_AMERICA, WORLDWIDE <br><br>Code so that your app gracefully handles any future changes to this list.
     */
    shipToExcludedRegions?: string;
    /**
     * A pipe (<code>|</code>) separated alphabetical list of the geographic countries and regions where the seller will ship the item. <br><br>If a region is specified, you will need to subtract any countries and regions returned in the <b> shipToExcludedRegions</b> column to fully understand where the seller will ship. <br><br>The COUNTRY: list is separated from the REGION: list with a semicolon (<code>;</code>).       <br><br><b> Format Example: </b> <br> <code>COUNTRY:US|BM|GL|MX|PM;REGION:AFRICA|ASIA|CENTRAL_AMERICA_AND_CARIBBEAN|EUROPE|MIDDLE_EAST|OCEANIA|SOUTH_AMERICA|SOUTHEAST_ASIA;</code>  <br><br><b> Country Values: </b> The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> standard code of the country.       <br><br><b> Region Values: </b> AFRICA, AMERICAS, ANTARCTIC, ARCTIC, ASIA, AUSTRALIA, CENTRAL_AMERICA_AND_CARIBBEAN, EUROPE, EURO_UNION, GREATER_CHINA, MIDDLE_EAST, NORTH_AMERICA, OCEANIA, REST_OF_ASIA, SOUTHEAST_ASIA, SOUTH_AMERICA, WORLDWIDE <br><br>Code so that your app gracefully handles any future changes to this list.
     */
    shipToIncludedRegions?: string;
    /**
     * The name of the shipping provider, such as FedEx, or USPS.
     */
    shippingCarrierCode?: string;
    /**
     * The final shipping cost for all the items after all discounts are applied.<br><br><span class="tablenote"><b> Note: </b>The price includes the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the <a href="/api-docs/static/rest-request-components.html#HTTP"><code>X-EBAY-C-MARKETPLACE-ID</code></a> request header specifying the supported marketplace (such as <code>EBAY_GB</code>) to see the VAT-inclusive pricing. For more information on VAT, refer to <a href="https://www.ebay.co.uk/help/listings/default/vat-obligations-eu?id=4650&st=12&pos=1&query=Your%20VAT%20obligations%20in%20the%20EU&intent=VAT">VAT Obligations in the EU</a>.</span>
     */
    shippingCost?: string;
    /**
     * Indicates the class of the shipping cost. <br><br><b> Valid Values: </b> FIXED or CALCULATED <br><br>Code so that your app gracefully handles any future changes to this list.
     */
    shippingCostType?: string;
    /**
     * The type of shipping service. For example, USPS First Class.
     */
    shippingServiceCode?: string;
    /**
     * The type of a shipping option, such as EXPEDITED, ONE_DAY, STANDARD, ECONOMY, PICKUP, etc.
     */
    shippingType?: string;
    /**
     * The size of the item.
     */
    size?: string;
    /**
     * The seller-defined description of the TAKE_BACK custom policy for the item.
     */
    takeBackPolicyDescription?: string;
    /**
     * The seller-defined label of the TAKE_BACK custom policy for the item. A TAKE_BACK policy describes the seller's regulatory responsibility to take back a purchased item for disposal when the buyer purchases a new one.
     */
    takeBackPolicyLabel?: string;
    /**
     * The seller created title of the item. This text is an escaped string when special characters are present, using the following rules:</p>   <ul>       <li>Double quotes (&#34;) and backslashes (&#92;) in the Title are escaped with a backslash (&#92;) character</li>      <li>If there are any tabs (&#92;t), double quotes (&#34;), or backslashes (&#92;) in the Title, the entire Title will be wrapped in double quotes.</li>   </ul>   <p><b>For example</b></p>   <p>Before:</p>   <p><code>Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;</b>Tracking</code>   </p>   <p><code>Marvel Legends HULK 8<b>&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#34;</b> Series</code>   </p>   <p>After:</p>   <p><code>&#34;Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;&#92;</b> Tracking&#34;</code>   </p>   <p><code>&#34;Marvel Legends HULK 8<b>&#92;&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#92;&#34;</b> Series<b>&#34;</b> </code>   </p>
     */
    title?: string;
    /**
     * For an item that is priced by the unit, the total number of units that are on offer. For example, if the item is priced by the meter and 50 cm is on offer, the <b>totalUnits</b> would be 0.5 m.
     */
    totalUnits?: string;
    /**
     * The URL to the image that shows the information on the tyre label.
     */
    tyreLabelImageUrl?: string;
    /**
     * This is the price per unit for the item. Some European countries require listings for certain types of products to include the price per unit so buyers can accurately compare prices.   <br><br>For example: <br><br><code>"unitPricingMeasure": "100g",<br> "unitPrice": {<br>&nbsp;&nbsp;"value": "7.99",<br>&nbsp;&nbsp;"currency": "GBP"</code>
     */
    unitPrice?: string;
    /**
     * The designation, such as size, weight, volume, count, etc., that was used to specify the quantity of the item.  This helps buyers compare prices. <br><br>For example, the following tells the buyer that the item is 7.99 per 100 grams. <br><br><code>"unitPricingMeasure": "100g",<br> "unitPrice": {<br>&nbsp;&nbsp;"value": "7.99",<br>&nbsp;&nbsp;"currency": "GBP"</code>
     */
    unitPricingMeasure?: string;
}
