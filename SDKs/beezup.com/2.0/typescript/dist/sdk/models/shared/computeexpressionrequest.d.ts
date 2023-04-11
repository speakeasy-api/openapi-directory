import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message to compute an expression based on the provided product values
 */
export declare class ComputeExpressionRequest extends SpeakeasyBase {
    /**
     * The encrypted excel expression of the column
     */
    encryptedExpression: string;
    /**
     * The key is the column identifier
     */
    productValues: Record<string, string>;
}
