import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message to compute an expression based on the provided product values
**/
export declare class ComputeExpressionRequest extends SpeakeasyBase {
    encryptedExpression: string;
    productValues: Record<string, string>;
}
