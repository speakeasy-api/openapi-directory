import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message to create a custom column
**/
export declare class CreateCustomColumnRequest extends SpeakeasyBase {
    displayGroupName: string;
    encryptedBlocklyExpression: string;
    encryptedExpression: string;
    userColumnName: string;
}
