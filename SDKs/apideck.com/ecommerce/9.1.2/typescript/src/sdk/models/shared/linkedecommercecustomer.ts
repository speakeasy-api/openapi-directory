/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { Expose, Type } from "class-transformer";

/**
 * The customer this entity is linked to.
 */
export class LinkedEcommerceCustomer extends SpeakeasyBase {
  /**
   * Company name of the customer
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ elemType: Email })
  @Expose({ name: "emails" })
  @Type(() => Email)
  emails?: Email[];

  /**
   * First name of the customer
   */
  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  /**
   * The ID of the customer this entity is linked to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * Last name of the customer
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  /**
   * Full name of the customer
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ elemType: PhoneNumber })
  @Expose({ name: "phone_numbers" })
  @Type(() => PhoneNumber)
  phoneNumbers?: PhoneNumber[];
}
