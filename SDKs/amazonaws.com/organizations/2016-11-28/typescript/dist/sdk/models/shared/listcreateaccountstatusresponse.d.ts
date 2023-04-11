import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAccountStatus } from "./createaccountstatus";
/**
 * Success
 */
export declare class ListCreateAccountStatusResponse extends SpeakeasyBase {
    createAccountStatuses?: CreateAccountStatus[];
    nextToken?: string;
}
