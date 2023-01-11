import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The message request to change a custom column expression an user name
**/
export declare class ChangeCustomColumnRequest extends SpeakeasyBase {
    encryptedBlocklyExpression: string;
    encryptedExpression: string;
    userColumName: string;
}
