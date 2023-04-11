import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message to change the custom column expression
 */
export declare class ChangeCustomColumnExpressionRequest extends SpeakeasyBase {
    /**
     * The encrypted XML Blockly representation of the expression
     */
    encryptedBlocklyExpression: string;
    /**
     * The encrypted excel expression of the column
     */
    encryptedExpression: string;
}
