import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message to create a custom column
 */
export declare class CreateCustomColumnRequest extends SpeakeasyBase {
    /**
     * Indicate the display group name where the column must be putted
     */
    displayGroupName: string;
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
    userColumnName: string;
}
