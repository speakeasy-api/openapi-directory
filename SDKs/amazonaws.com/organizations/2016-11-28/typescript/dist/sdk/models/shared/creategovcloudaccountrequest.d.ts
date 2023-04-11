import { SpeakeasyBase } from "../../../internal/utils";
import { IAMUserAccessToBillingEnum } from "./iamuseraccesstobillingenum";
import { Tag } from "./tag";
export declare class CreateGovCloudAccountRequest extends SpeakeasyBase {
    accountName: string;
    email: string;
    iamUserAccessToBilling?: IAMUserAccessToBillingEnum;
    roleName?: string;
    tags?: Tag[];
}
