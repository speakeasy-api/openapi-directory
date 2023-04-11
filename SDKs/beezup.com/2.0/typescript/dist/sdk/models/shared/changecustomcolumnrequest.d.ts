import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The message request to change a custom column expression an user name
 */
export declare class ChangeCustomColumnRequest extends SpeakeasyBase {
    /**
     * The encrypted XML Blockly representation of the expression
     */
    encryptedBlocklyExpression: string;
    /**
     * The encrypted excel expression of the column
     */
    encryptedExpression: string;
    /**
     * Column named by the user
     */
    userColumName: string;
}
