/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The type that defines the columns returned in the <b>Item Group</b> feed file.
 */
export class ItemGroup extends SpeakeasyBase {
  /**
   * A pipe separated (<code>|</code>) list of URLs for the additional images for the item group. These images are in addition to the primary image, which is returned in the <b>imageUrl</b> column. <b>Note: </b> This column can contain multiple values.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "additionalImageUrls" })
  additionalImageUrls?: string;

  /**
   * A boolean that indicates whether the images can be altered. If the value is <code>true</code>, you cannot modify the image. <p><span class="tablenote"><b>Note: </b> Due to image licensing agreements and other legal concerns, modification (including resizing) of some images is strictly prohibited. These images are for display as-is only. </span></p>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "imageAlteringProhibited" })
  imageAlteringProhibited?: boolean;

  /**
   * The URL to the primary image of the item. The other images of the item group are returned in the <b> additionalImageUrls</b> column.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "imageUrl" })
  imageUrl?: string;

  /**
   * The unique identifier for the item group. This ID is returned in the <b> primaryItemGroupId</b> column of the <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed">Item Feed</a> file.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "itemGroupId" })
  itemGroupId?: string;

  /**
   * The item group type. For example:<code> SELLER_DEFINED_VARIATIONS</code>, indicates that the item group was created by the seller. <br><br>Code so that your app gracefully handles any future changes to this list.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "itemGroupType" })
  itemGroupType?: string;

  /**
   * The seller created title of the item group. This text is an escaped string when special characters are present, using the following rules:</p>   <ul>     <li>Double quotes (&#34;) and backslashes (&#92;) in the Title are escaped with a backslash (&#92;) character</li>      <li>If there are any tabs (&#92;t), double quotes (&#34;), or backslashes (&#92;) in the Title, the entire Title will be wrapped in double quotes.</li>   </ul>   <p><b>For example</b></p>   <p>Before:</p>   <p><code>Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;</b>Tracking</code>   </p>   <p><code>Marvel Legends HULK 8<b>&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#34;</b> Series</code>   </p>   <p>After:</p>   <p><code>&#34;Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;&#92;</b> Tracking&#34;</code>   </p>   <p><code>&#34;Marvel Legends HULK 8<b>&#92;&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#92;&#34;</b> Series<b>&#34;</b> </code>   </p>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  /**
   * A pipe separated (<code>|</code>) list of the aspect (variation) names for this item group. The aspect name is BASE64 encoded. <b>Note: </b> This column can contain multiple values.  <p>&nbsp;&nbsp;<b> Encoded Format:</b> <br>&nbsp;&nbsp;&nbsp;<code><em>aspectName</em>|<em>aspectName</em></code> </p>   <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>): <br>&nbsp;&nbsp;&nbsp;<code>Q29sb3I=<b style="font-family: 'Arial Black';">|</b>U2l6ZQ==</code> </p>      <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Color|Size </p>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "variesByLocalizedAspects" })
  variesByLocalizedAspects?: string;
}
