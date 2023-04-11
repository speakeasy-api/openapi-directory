import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaCodeHook } from "./lambdacodehook";
/**
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 */
export declare class CodeHookSpecification extends SpeakeasyBase {
    /**
     * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
     */
    lambdaCodeHook: LambdaCodeHook;
}
