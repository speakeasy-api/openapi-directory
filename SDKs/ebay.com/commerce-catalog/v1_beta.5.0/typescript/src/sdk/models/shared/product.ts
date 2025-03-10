/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Aspect } from "./aspect";
import { Image } from "./image";
import { Expose, Type } from "class-transformer";

/**
 * This type contains the full details of a specified product, including information about the product's identifiers, product images, aspects, and categories.
 */
export class Product extends SpeakeasyBase {
  /**
   * Contains information about  additional images associated with this product. For the primary image, see the <b>image</b> container.
   */
  @SpeakeasyMetadata({ elemType: Image })
  @Expose({ name: "additionalImages" })
  @Type(() => Image)
  additionalImages?: Image[];

  /**
   * Contains an array of the category aspects and their values that are associated with this product.
   */
  @SpeakeasyMetadata({ elemType: Aspect })
  @Expose({ name: "aspects" })
  @Type(() => Aspect)
  aspects?: Aspect[];

  /**
   * The manufacturer's brand name for this product.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "brand" })
  brand?: string;

  /**
   * The rich description of this product, which might contain HTML.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * A list of all European Article Numbers (EANs) that identify this product.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ean" })
  ean?: string[];

  /**
   * The eBay product ID of this product.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "epid" })
  epid?: string;

  /**
   * A list of all GTINs that identify this product. Currently this can include EAN, ISBN, and UPC identifier types.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "gtin" })
  gtin?: string[];

  /**
   * This type contains information about a product image stored in eBay Picture Services (EPS).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "image" })
  @Type(() => Image)
  image?: Image;

  /**
   * A list of all International Standard Book Numbers (ISBNs) that identify this product.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isbn" })
  isbn?: string[];

  /**
   * A list of all MPN values that the manufacturer uses to identify this product.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "mpn" })
  mpn?: string[];

  /**
   * A list of category IDs (other than the value of <b>primaryCategoryId</b>) for all the leaf categories to which this product might belong.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "otherApplicableCategoryIds" })
  otherApplicableCategoryIds?: string[];

  /**
   * The identifier of the leaf category that eBay recommends using to list this product, based on previous listings of similar products. Products in the eBay catalog are not automatically associated with any particular category, but using an inappropriate category can make it difficult for prospective buyers to find the product. For other possible categories that might be used, see <b>otherApplicableCategoryIds</b>.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "primaryCategoryId" })
  primaryCategoryId?: string;

  /**
   * The URL for this product's eBay product page.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "productWebUrl" })
  productWebUrl?: string;

  /**
   * The title of this product on eBay.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  /**
   * A list of Universal Product Codes (UPCs) that identify this product.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "upc" })
  upc?: string[];

  /**
   * The current version number of this product record in the catalog.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}
