import { SpeakeasyBase } from "../../../internal/utils";
import { GroupIdentity } from "./groupidentity";
import { IAMRoleIdentity } from "./iamroleidentity";
import { IAMUserIdentity } from "./iamuseridentity";
import { UserIdentity } from "./useridentity";
/**
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>
 */
export declare class Identity extends SpeakeasyBase {
    group?: GroupIdentity;
    iamRole?: IAMRoleIdentity;
    iamUser?: IAMUserIdentity;
    user?: UserIdentity;
}
