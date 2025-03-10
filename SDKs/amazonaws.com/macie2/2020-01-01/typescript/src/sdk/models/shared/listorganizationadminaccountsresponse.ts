/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AdminAccount } from "./adminaccount";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListOrganizationAdminAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AdminAccount })
  @Expose({ name: "adminAccounts" })
  @Type(() => AdminAccount)
  adminAccounts?: AdminAccount[];

  @SpeakeasyMetadata()
  @Expose({ name: "nextToken" })
  nextToken?: string;
}
