/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { AccountHolderCapabilityInput } from "./accountholdercapability";
import { ContactDetails } from "./contactdetails";
import { Expose, Transform, Type } from "class-transformer";

export class AccountHolderInfoInput extends SpeakeasyBase {
  /**
   * The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "balancePlatform" })
  balancePlatform?: string;

  /**
   * Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.
   */
  @SpeakeasyMetadata({ elemType: AccountHolderCapabilityInput })
  @Expose({ name: "capabilities" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, AccountHolderCapabilityInput> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], AccountHolderCapabilityInput);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  capabilities?: Record<string, AccountHolderCapabilityInput>;

  @SpeakeasyMetadata()
  @Expose({ name: "contactDetails" })
  @Type(() => ContactDetails)
  contactDetails?: ContactDetails;

  /**
   * Your description for the account holder, maximum 300 characters.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "legalEntityId" })
  legalEntityId: string;

  /**
   * Your reference for the account holder, maximum 150 characters.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  /**
   * The [time zone](https://www.iana.org/time-zones) of the account holder. For example, **Europe/Amsterdam**.
   *
   * @remarks
   * Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "timeZone" })
  timeZone?: string;
}
