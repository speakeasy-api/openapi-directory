import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAccountStatus } from "./createaccountstatus";
/**
 * Success
 */
export declare class CreateGovCloudAccountResponse extends SpeakeasyBase {
    /**
     * Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an Amazon Web Services account or an Amazon Web Services GovCloud (US) account in an organization.
     */
    createAccountStatus?: CreateAccountStatus;
}
